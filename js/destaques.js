// Carrossel de promoções para o catálogo - versão suave
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do carrossel de promoções
    function inicializarCarrosselPromocoes() {
        const promocoesContainer = document.getElementById('promocoes-container');
        if (!promocoesContainer) return;
        
        // Adicionar classe para o carrossel
        promocoesContainer.classList.add('promocoes-carousel');
        
        // Adicionar controles de navegação
        const controlsHTML = `
            <div class="carousel-controls mt-4">
                <button class="carousel-control prev" id="promocoes-prev">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <div class="carousel-indicators" id="promocoes-indicators"></div>
                <button class="carousel-control next" id="promocoes-next">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
        `;
        
        // Inserir controles após o container de promoções
        promocoesContainer.insertAdjacentHTML('afterend', controlsHTML);
        
        // Configurar eventos de navegação
        const prevBtn = document.getElementById('promocoes-prev');
        const nextBtn = document.getElementById('promocoes-next');
        const indicators = document.getElementById('promocoes-indicators');
        
        // Obter todos os itens de promoção
        const promocoesItems = promocoesContainer.querySelectorAll('.produto-item');
        if (promocoesItems.length === 0) return;
        
        // Configurar visualização inicial
        let currentSlide = 0;
        const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 4;
        const totalSlides = Math.ceil(promocoesItems.length / itemsPerSlide);
        
        // Criar indicadores
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => {
                goToSlide(i);
            });
            indicators.appendChild(indicator);
        }
        
        // Função para ir para um slide específico
        function goToSlide(slideIndex) {
            if (slideIndex < 0) slideIndex = totalSlides - 1;
            if (slideIndex >= totalSlides) slideIndex = 0;
            
            currentSlide = slideIndex;
            
            // Atualizar visualização dos itens
            promocoesItems.forEach((item, index) => {
                const startIndex = currentSlide * itemsPerSlide;
                const endIndex = startIndex + itemsPerSlide;
                
                if (index >= startIndex && index < endIndex) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Atualizar indicadores
            const allIndicators = indicators.querySelectorAll('.carousel-indicator');
            allIndicators.forEach((ind, index) => {
                if (index === currentSlide) {
                    ind.classList.add('active');
                } else {
                    ind.classList.remove('active');
                }
            });
        }
        
        // Configurar eventos de navegação
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
        });
        
        // Inicializar primeiro slide
        goToSlide(0);
        
        // Adicionar navegação por toque para dispositivos móveis
        let touchStartX = 0;
        let touchEndX = 0;
        
        promocoesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        promocoesContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
        
        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe para esquerda
                goToSlide(currentSlide + 1);
            } else if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe para direita
                goToSlide(currentSlide - 1);
            }
        }
        
        // Adicionar auto-play com transição mais suave
        let autoPlayInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 6000); // Tempo mais longo para transições mais suaves
        
        // Pausar auto-play quando o mouse estiver sobre o carrossel
        promocoesContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        promocoesContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 6000);
        });
        
        // Ajustar carrossel quando a janela for redimensionada
        window.addEventListener('resize', () => {
            const newItemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 4;
            if (newItemsPerSlide !== itemsPerSlide) {
                // Reconfigurar carrossel
                location.reload();
            }
        });
    }
    
    // Adicionar estilos CSS para o carrossel - versão neutra
    function adicionarEstilosCarrossel() {
        const style = document.createElement('style');
        style.textContent = `
            .promocoes-carousel {
                position: relative;
                overflow: hidden;
            }
            
            .carousel-controls {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
            }
            
            .carousel-control {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: var(--primary-color);
                color: white;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: var(--transition);
                margin: 0 10px;
            }
            
            .carousel-control:hover {
                background-color: var(--secondary-color);
                transform: scale(1.05);
            }
            
            .carousel-indicators {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 15px;
            }
            
            .carousel-indicator {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #ccc;
                margin: 0 5px;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .carousel-indicator.active {
                background-color: var(--primary-color);
                transform: scale(1.1);
            }
            
            @media (max-width: 768px) {
                .carousel-control {
                    width: 30px;
                    height: 30px;
                }
                
                .carousel-indicator {
                    width: 6px;
                    height: 6px;
                    margin: 0 3px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Destacar visualmente a seção de promoções - versão suave
    function destacarSecaoPromocoes() {
        const promocoesSection = document.getElementById('promocoes');
        if (!promocoesSection) return;
        
        // Adicionar efeito de destaque suave
        promocoesSection.classList.add('promocoes-destacadas');
        
        // Adicionar estilo para o destaque
        const style = document.createElement('style');
        style.textContent = `
            .promocoes-destacadas {
                position: relative;
                overflow: hidden;
            }
            
            .promocoes-destacadas::before {
                content: '';
                position: absolute;
                top: -100px;
                right: -100px;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(120, 120, 120, 0.1) 0%, rgba(120, 120, 120, 0) 70%);
                border-radius: 50%;
                z-index: 0;
                animation: float 20s infinite ease-in-out;
            }
            
            .promocoes-destacadas::after {
                content: '';
                position: absolute;
                bottom: -100px;
                left: -100px;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(100, 100, 100, 0.1) 0%, rgba(100, 100, 100, 0) 70%);
                border-radius: 50%;
                z-index: 0;
                animation: float 20s infinite ease-in-out reverse;
            }
            
            .promocoes-title h2 {
                position: relative;
                display: inline-block;
            }
            
            .promocoes-title h2::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 2px;
                background: var(--primary-color);
                border-radius: 2px;
            }
            
            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(20px, 15px) rotate(3deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Adicionar ícone de promoção
        const promocoesTitle = promocoesSection.querySelector('.promocoes-title h2');
        if (promocoesTitle) {
            promocoesTitle.innerHTML = `<i class="bi bi-tags me-2"></i>${promocoesTitle.textContent}`;
        }
    }
    
    // Destacar categorias - versão suave
    function destacarCategorias() {
        const categoriasSection = document.querySelector('.categorias');
        if (!categoriasSection) return;
        
        // Adicionar efeito de destaque
        const categoriaItems = categoriasSection.querySelectorAll('.categoria-item');
        categoriaItems.forEach(item => {
            item.classList.add('categoria-destacada');
            
            // Adicionar ícone à categoria
            const cardTitle = item.querySelector('.card-title');
            if (cardTitle && cardTitle.textContent.includes('Roupas')) {
                cardTitle.innerHTML = `<i class="bi bi-tshirt me-2"></i>${cardTitle.textContent}`;
            } else if (cardTitle && cardTitle.textContent.includes('Calçados')) {
                cardTitle.innerHTML = `<i class="bi bi-boot me-2"></i>${cardTitle.textContent}`;
            }
        });
        
        // Adicionar estilo para o destaque
        const style = document.createElement('style');
        style.textContent = `
            .categoria-destacada {
                position: relative;
                overflow: hidden;
                transition: transform 0.4s ease, box-shadow 0.4s ease;
            }
            
            .categoria-destacada::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(100, 100, 100, 0.05) 0%, rgba(120, 120, 120, 0.05) 100%);
                z-index: 1;
                opacity: 0;
                transition: opacity 0.4s ease;
            }
            
            .categoria-destacada:hover::before {
                opacity: 1;
            }
            
            .categoria-destacada:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
            }
            
            .categoria-destacada .card-body {
                position: relative;
                z-index: 2;
            }
            
            .categoria-destacada .btn-categoria {
                transform: translateY(5px);
                opacity: 0.9;
                transition: transform 0.4s ease, opacity 0.4s ease, background-color 0.3s ease;
            }
            
            .categoria-destacada:hover .btn-categoria {
                transform: translateY(0);
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Inicializar todas as melhorias
    adicionarEstilosCarrossel();
    inicializarCarrosselPromocoes();
    destacarSecaoPromocoes();
    destacarCategorias();
});
