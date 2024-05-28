const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  installBtn.style.display = 'block';
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
  installBtn.style.display = 'none';
});
