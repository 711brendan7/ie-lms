(function () {
  const AUTH_KEY  = 'ie_lms_auth';
  const PASS_HASH = '2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731';

  if (sessionStorage.getItem(AUTH_KEY) === '1') return;

  /* オーバーレイを即座に body に書き込む */
  function inject() {
    var overlay = document.createElement('div');
    overlay.setAttribute('id', 'auth-overlay');
    overlay.setAttribute('style',
      'position:fixed;top:0;left:0;width:100%;height:100%;' +
      'background:#1e1b4b;display:flex;align-items:center;' +
      'justify-content:center;z-index:2147483647;'
    );
    overlay.innerHTML =
      '<div style="background:#fff;border-radius:12px;padding:40px 32px;' +
        'width:300px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.4);">' +
        '<div style="font-size:32px;margin-bottom:8px;">🏭</div>' +
        '<h2 style="margin:0 0 6px;font-size:18px;color:#1e1b4b;font-family:sans-serif;">IE-LMS</h2>' +
        '<p style="margin:0 0 20px;font-size:13px;color:#6b7280;font-family:sans-serif;">パスワードを入力してください</p>' +
        '<input id="auth-pw" type="password" maxlength="20" ' +
          'style="width:100%;padding:10px;font-size:20px;letter-spacing:8px;' +
          'border:2px solid #e5e7eb;border-radius:8px;text-align:center;' +
          'box-sizing:border-box;outline:none;" placeholder="••••">' +
        '<button id="auth-go" ' +
          'style="margin-top:10px;width:100%;padding:11px;background:#7c3aed;' +
          'color:#fff;border:none;border-radius:8px;font-size:15px;' +
          'font-weight:600;cursor:pointer;font-family:sans-serif;">ログイン</button>' +
        '<div id="auth-msg" style="margin-top:8px;font-size:13px;color:#ef4444;' +
          'font-family:sans-serif;min-height:18px;"></div>' +
      '</div>';

    document.body.appendChild(overlay);

    async function tryLogin() {
      var val = document.getElementById('auth-pw').value;
      if (!val) return;
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val));
      var hex = Array.from(new Uint8Array(buf))
        .map(function(b){ return b.toString(16).padStart(2,'0'); }).join('');
      if (hex === PASS_HASH) {
        sessionStorage.setItem(AUTH_KEY, '1');
        overlay.parentNode.removeChild(overlay);
      } else {
        document.getElementById('auth-msg').textContent = 'パスワードが違います';
        document.getElementById('auth-pw').value = '';
        document.getElementById('auth-pw').focus();
      }
    }

    document.getElementById('auth-go').addEventListener('click', tryLogin);
    document.getElementById('auth-pw').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') tryLogin();
    });
    document.getElementById('auth-pw').focus();
  }

  if (document.body) {
    inject();
  } else {
    document.addEventListener('DOMContentLoaded', inject);
  }
})();
