// Smooth fade-in effect when elements appear on screen
const elements = document.querySelectorAll('.exp-card, .project-card, .about-content');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 1s ease';
  observer.observe(el);
});
