(function () {
  const AUTH_KEY  = 'ie_lms_auth';
  const PASS_HASH = '2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731';

  if (sessionStorage.getItem(AUTH_KEY) === '1') return;

  document.documentElement.style.visibility = 'hidden';
  // オーバーレイ自身は visible に戻す（visibility は継承されるため）

  async function verify(input) {
    const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
    const hex  = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    return hex === PASS_HASH;
  }

  function showOverlay() {
    const el = document.createElement('div');
    el.id = 'auth-overlay';
    el.innerHTML = `
      <style>
        #auth-overlay {
          position:fixed; inset:0; background:#1e1b4b;
          display:flex; align-items:center; justify-content:center;
          z-index:99999; font-family:sans-serif;
          visibility:visible;
        }
        #auth-box {
          background:#fff; border-radius:12px; padding:40px 32px;
          width:320px; text-align:center; box-shadow:0 8px 32px rgba(0,0,0,.3);
        }
        #auth-box h2 { margin:0 0 8px; font-size:20px; color:#1e1b4b; }
        #auth-box p  { margin:0 0 24px; font-size:13px; color:#6b7280; }
        #auth-input {
          width:100%; padding:12px; font-size:18px; letter-spacing:6px;
          border:2px solid #e5e7eb; border-radius:8px; text-align:center;
          outline:none; box-sizing:border-box;
        }
        #auth-input:focus { border-color:#7c3aed; }
        #auth-btn {
          margin-top:12px; width:100%; padding:12px;
          background:#7c3aed; color:#fff; border:none; border-radius:8px;
          font-size:15px; font-weight:600; cursor:pointer;
        }
        #auth-btn:hover { background:#6d28d9; }
        #auth-err { margin-top:10px; font-size:13px; color:#ef4444; min-height:18px; }
      </style>
      <div id="auth-box">
        <h2>🏭 IE-LMS</h2>
        <p>パスワードを入力してください</p>
        <input id="auth-input" type="password" maxlength="20" placeholder="••••" autofocus>
        <button id="auth-btn">ログイン</button>
        <div id="auth-err"></div>
      </div>
    `;
    document.body.appendChild(el);

    async function tryLogin() {
      const val = document.getElementById('auth-input').value;
      if (!val) return;
      if (await verify(val)) {
        sessionStorage.setItem(AUTH_KEY, '1');
        document.documentElement.style.visibility = '';
        el.remove();
      } else {
        document.getElementById('auth-err').textContent = 'パスワードが違います';
        document.getElementById('auth-input').value = '';
        document.getElementById('auth-input').focus();
      }
    }

    document.getElementById('auth-btn').addEventListener('click', tryLogin);
    document.getElementById('auth-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') tryLogin();
    });
  }

  if (document.body) {
    showOverlay();
  } else {
    document.addEventListener('DOMContentLoaded', showOverlay);
  }
})();
