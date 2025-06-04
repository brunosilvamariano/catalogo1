// Script para funcionalidades interativas do catálogo

document.addEventListener('DOMContentLoaded', function() {
    // Botão Voltar ao Topo
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnVoltarTopo.classList.add('show');
        } else {
            btnVoltarTopo.classList.remove('show');
        }
    });
    
    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efeitos de hover nos cards de produtos
    const produtoCards = document.querySelectorAll('.produto-card');
    
    produtoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow');
        });
    });
    
    // Animação suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
