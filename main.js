function hidePreloader() {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
      
      const mainContent = document.getElementById('main-content');
      mainContent.style.display = 'block';
    }, 10000); // 10000 milliseconds = 10 seconds
  }
  