// Subtle entrance animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.section, .project-card, .stat').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

// Add reveal styles dynamically
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .project-card.reveal {
    transition-delay: calc(var(--i, 0) * 0.1s);
  }
`;
document.head.appendChild(style);

// Stagger project cards
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.setProperty('--i', i);
});
