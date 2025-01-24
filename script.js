// ALTERAR ANO DO FOOTER
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;



// BOTAO VOLTAR AO TOPO
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});



// ANIMACAO DE CARREGAMENTO
window.revelar = ScrollReveal({ reset: true })

revelar.reveal('.animation-element',
    {
        duration: 1500,
        distance: '32px',
        rotate: { x: 8, y: 8, z: 0 }
    }
)