const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    installBtn.style.display = 'none';
  });
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
  console.log('PWA installed');
});
