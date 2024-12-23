function hidePreloader() {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
      const mainContent = document.getElementById('main-content');
      mainContent.style.display = 'block';
    }, 500);
  }, 10000);
}