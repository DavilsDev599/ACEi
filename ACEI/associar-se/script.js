// Adicione esta função ao script.js existente
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Chame a função após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    // ... (código existente) ...
    highlightActiveNav();
});