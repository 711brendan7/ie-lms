(function () {
  'use strict';

  // ---- State ----
  let messages = [];
  let isOpen = false;
  let isStreaming = false;

  // ---- DOM creation ----
  function createWidget() {
    const container = document.createElement('div');
    container.id = 'ai-chat-widget';
    container.innerHTML = `
      <button class="ai-chat-fab" id="ai-chat-fab" title="AIアシスタントに質問する" aria-label="AIアシスタントを開く">
        <span class="ai-chat-fab-icon">💬</span>
        <span class="ai-chat-fab-label">AI質問</span>
      </button>

      <div class="ai-chat-panel" id="ai-chat-panel" aria-hidden="true">
        <div class="ai-chat-header">
          <div class="ai-chat-header-left">
            <span class="ai-chat-avatar">🤖</span>
            <div>
              <div class="ai-chat-title">IE-LMS AIアシスタント</div>
              <div class="ai-chat-subtitle">IE / QC / TPM / 課題解決の専門家</div>
            </div>
          </div>
          <div class="ai-chat-header-actions">
            <button class="ai-chat-clear" id="ai-chat-clear" title="会話をリセット">🗑</button>
            <button class="ai-chat-close" id="ai-chat-close" title="閉じる" aria-label="閉じる">✕</button>
          </div>
        </div>

        <div class="ai-chat-messages" id="ai-chat-messages">
          <div class="ai-chat-message ai-chat-message--bot">
            <div class="ai-chat-bubble">
              こんにちは！IE・QC・TPM・課題解決について何でも聞いてください。<br>
              例：「なぜなぜ分析のやり方を教えて」「OEEの計算方法は？」「MECE とは？」
            </div>
          </div>
        </div>

        <div class="ai-chat-input-area">
          <textarea
            class="ai-chat-input"
            id="ai-chat-input"
            placeholder="質問を入力してください… (Enter で送信、Shift+Enter で改行)"
            rows="2"
            maxlength="1000"
          ></textarea>
          <button class="ai-chat-send" id="ai-chat-send" title="送信">
            <span>▶</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  }

  // ---- Toggle panel ----
  function togglePanel() {
    isOpen = !isOpen;
    const panel = document.getElementById('ai-chat-panel');
    const fab = document.getElementById('ai-chat-fab');
    panel.classList.toggle('ai-chat-panel--open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
    fab.classList.toggle('ai-chat-fab--open', isOpen);
    if (isOpen) {
      setTimeout(() => document.getElementById('ai-chat-input').focus(), 200);
    }
  }

  // ---- Render messages ----
  function appendMessage(role, text) {
    const container = document.getElementById('ai-chat-messages');
    const div = document.createElement('div');
    div.className = `ai-chat-message ai-chat-message--${role === 'user' ? 'user' : 'bot'}`;
    const bubble = document.createElement('div');
    bubble.className = 'ai-chat-bubble';
    bubble.innerHTML = renderSimpleMarkdown(text);
    div.appendChild(bubble);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return bubble;
  }

  function renderSimpleMarkdown(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/^### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^## (.+)$/gm, '<h3>$1</h3>')
      .replace(/^# (.+)$/gm, '<h3>$1</h3>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\\n/g, '\n')
      .replace(/\n/g, '<br>');
  }

  // ---- Send message ----
  async function sendMessage() {
    if (isStreaming) return;
    const input = document.getElementById('ai-chat-input');
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';

    messages.push({ role: 'user', content: text });
    appendMessage('user', text);

    const sendBtn = document.getElementById('ai-chat-send');
    sendBtn.disabled = true;
    isStreaming = true;

    const botBubble = appendMessage('bot', '');
    botBubble.innerHTML = '<span class="ai-chat-typing"><span></span><span></span><span></span></span>';

    let accumulated = '';
    let firstChunk = true;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });

      if (!res.ok) {
        throw new Error('サーバーエラー: ' + res.status);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') break;

          if (firstChunk) {
            botBubble.innerHTML = '';
            firstChunk = false;
          }
          accumulated += data.replace(/\\n/g, '\n');
          botBubble.innerHTML = renderSimpleMarkdown(accumulated);
          document.getElementById('ai-chat-messages').scrollTop =
            document.getElementById('ai-chat-messages').scrollHeight;
        }
      }

      messages.push({ role: 'assistant', content: accumulated });
    } catch (err) {
      botBubble.innerHTML = '<span style="color:#ef4444">⚠️ ' + err.message + '</span>';
    } finally {
      isStreaming = false;
      sendBtn.disabled = false;
      document.getElementById('ai-chat-messages').scrollTop =
        document.getElementById('ai-chat-messages').scrollHeight;
    }
  }

  // ---- Init ----
  function init() {
    createWidget();

    document.getElementById('ai-chat-fab').addEventListener('click', togglePanel);
    document.getElementById('ai-chat-close').addEventListener('click', togglePanel);

    document.getElementById('ai-chat-clear').addEventListener('click', () => {
      messages = [];
      const container = document.getElementById('ai-chat-messages');
      container.innerHTML = `
        <div class="ai-chat-message ai-chat-message--bot">
          <div class="ai-chat-bubble">
            会話をリセットしました。新しい質問をどうぞ！
          </div>
        </div>
      `;
    });

    document.getElementById('ai-chat-send').addEventListener('click', sendMessage);

    document.getElementById('ai-chat-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.getElementById('ai-chat-input').addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
