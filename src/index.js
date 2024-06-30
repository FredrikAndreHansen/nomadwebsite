window.addEventListener('load', function() {
    history.scrollRestoration = 'manual';

    const introLoadingDOMEl = document.querySelector('#intro-loading');
    introLoadingDOMEl.classList.add('fade-out-background');
    
    this.setTimeout(() => {
        introLoadingDOMEl.style.display = 'none';
    }, 200);
  });