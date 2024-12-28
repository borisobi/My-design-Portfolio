// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');
  const progress = document.querySelector('.progress');
  
  // Initially hide main content
  mainContent.style.opacity = '0';
  mainContent.style.display = 'block';
  
  // Animate progress bar
  gsap.to(progress, {
    width: "100%",
    duration: 5,
    ease: "power1.inOut"
  });
  
  // Handle preloader
  gsap.timeline()
    .to(preloader, {
      opacity: 0,
      duration: 0.5,
      delay: 3,
      onComplete: () => {
        preloader.style.display = 'none';
        mainContent.style.opacity = '1';
        initializeAnimations();
      }
    });
});

function initializeAnimations() {
  // Hero title animation
  gsap.from('.hero-title', { 
    opacity: 0, 
    y: 50, 
    duration: 1.5,
    ease: "power3.out"
  });

  // Stats cards animation
  gsap.from('.stat-card', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Project cards animation
  gsap.from('.project', {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}