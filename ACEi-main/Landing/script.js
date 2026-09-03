document.addEventListener('DOMContentLoaded', function() {
  // Menu responsivo (hambúrguer)
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      
      // Altera o texto do botão (opcional)
      const isOpen = navMenu.classList.contains('open');
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // Fechar o menu ao clicar em um link (em dispositivos móveis)
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('open');
        menuToggle.textContent = '☰';
      }
    });
  });

  // Efeito de rolagem suave para links internos (caso existam)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Pequena animação ao carregar os cards (apenas visual)
  const cards = document.querySelectorAll('.card, .news-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});