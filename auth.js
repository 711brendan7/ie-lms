(function () {
  if (sessionStorage.getItem('ie_lms_auth') === '1') return;
  var dest = 'login.html?from=' + encodeURIComponent(location.href.split('/').pop() || 'index.html');
  location.replace(dest);
})();
