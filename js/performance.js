// Melhorias de performance e usabilidade para o catálogo autoral
document.addEventListener('DOMContentLoaded', function() {
    // Configurações
    const config = {
        whatsappNumero: "5547988978095",
        animationSpeed: 400,
        filterDelay: 300,
        lazyLoadThreshold: 0.1,
        notificationDuration: 3000
    };

    // Elementos DOM
    const elements = {
        body: document.body,
        navbar: document.querySelector('.navbar'),
        btnVoltarTopo: document.getElementById('btnVoltarTopo'),
        productViewModal: document.getElementById('productViewModal'),
        closeProductView: document.getElementById('closeProductView'),
        filterOptions: document.querySelectorAll('.filter-option'),
        productCards: document.querySelectorAll('.product-card'),
        productViewMainImage: document.getElementById('productViewMainImage'),
        productViewThumbnails: document.querySelectorAll('.product-view-thumbnail'),
        productViewCategory: document.getElementById('productViewCategory'),
        productViewName: document.getElementById('productViewName'),
        productViewPrice: document.getElementById('productViewPrice'),
        productViewDescription: document.getElementById('productViewDescription'),
        productViewWhatsapp: document.getElementById('productViewWhatsapp'),
        favoriteButtons: document.querySelectorAll('.btn-favorite'),
        contextCards: document.querySelectorAll('.context-card'),
        navLinks: document.querySelectorAll('.nav-link'),
        newsletterForm: document.querySelector('.newsletter-form')
    };

    // Marcar página como carregada para animações
    setTimeout(() => {
        elements.body.classList.add('page-loaded');
    }, 100);

    // Função para criar imagens fictícias otimizadas
    function criarImagemPlaceholder(categoria, tipo, id, largura, altura) {
        const canvas = document.createElement('canvas');
        canvas.width = largura;
        canvas.height = altura;
        const ctx = canvas.getContext('2d');
        
        // Definir cores de fundo baseadas na categoria
        let corFundo, corTexto;
        
        if (categoria === 'casual') {
            corFundo = '#f5f5f5';
            corTexto = '#2c3e50';
        } else if (categoria === 'trabalho') {
            corFundo = '#e9ecef';
            corTexto = '#2c3e50';
        } else if (categoria === 'esporte') {
            corFundo = '#e8f4f2';
            corTexto = '#16a085';
        } else if (categoria === 'looks') {
            corFundo = '#edf2f7';
            corTexto = '#2c3e50';
        } else {
            corFundo = '#f8f9fa';
            corTexto = '#2c3e50';
        }
        
        // Preencher fundo
        ctx.fillStyle = corFundo;
        ctx.fillRect(0, 0, largura, altura);
        
        // Adicionar borda
        ctx.strokeStyle = '#dee2e6';
        ctx.lineWidth = 2;
        ctx.strokeRect(5, 5, largura - 10, altura - 10);
        
        // Adicionar texto
        ctx.fillStyle = corTexto;
        ctx.font = 'bold 24px Montserrat';
        ctx.textAlign = 'center';
        ctx.fillText(`${tipo}`, largura / 2, altura / 2 - 20);
        
        // Adicionar ID
        ctx.font = '18px Montserrat';
        ctx.fillText(`ID: ${id}`, largura / 2, altura / 2 + 20);
        
        // Adicionar dimensões
        ctx.font = '14px Open Sans';
        ctx.fillText(`${largura}x${altura}`, largura / 2, altura / 2 + 50);
        
        return canvas.toDataURL('image/jpeg', 0.8); // Compressão para melhor performance
    }

    // Inicializar imagens com lazy loading
    function inicializarImagens() {
        // Imagem do banner
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.classList.add('lazy-load');
            heroImage.src = criarImagemPlaceholder('banner', 'Banner Principal', 0, 1200, 800);
            setTimeout(() => heroImage.classList.add('loaded'), 100);
        }
        
        // Inicializar lazy loading para imagens
        const lazyImages = document.querySelectorAll('img:not(.hero-image)');
        
        const lazyLoadObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const alt = img.alt || '';
                    const parent = img.closest('.context-image, .product-image, .look-image');
                    
                    if (!parent) return;
                    
                    let categoria = 'casual';
                    let tipo = alt;
                    let id = 1;
                    
                    if (parent.classList.contains('context-image')) {
                        categoria = alt.toLowerCase().includes('casual') ? 'casual' : 
                                   alt.toLowerCase().includes('trabalho') ? 'trabalho' : 'esporte';
                        tipo = categoria.charAt(0).toUpperCase() + categoria.slice(1);
                        id = Array.from(document.querySelectorAll('.context-image')).indexOf(parent) + 1;
                    } else if (parent.classList.contains('product-image')) {
                        const productCard = parent.closest('.product-card');
                        if (productCard) {
                            categoria = productCard.getAttribute('data-context') || 'casual';
                            id = productCard.getAttribute('data-id') || Array.from(document.querySelectorAll('.product-card')).indexOf(productCard) + 1;
                        }
                        tipo = alt;
                    } else if (parent.classList.contains('look-image')) {
                        categoria = 'looks';
                        tipo = alt;
                        id = Array.from(document.querySelectorAll('.look-image')).indexOf(parent) + 1;
                    }
                    
                    // Adicionar classe de placeholder
                    parent.classList.add('image-placeholder');
                    
                    // Carregar imagem com delay para melhor performance
                    setTimeout(() => {
                        img.classList.add('lazy-load');
                        
                        const width = parent.offsetWidth;
                        const height = parent.offsetHeight;
                        
                        img.src = criarImagemPlaceholder(categoria, tipo, id, width, height);
                        
                        img.onload = () => {
                            img.classList.add('loaded');
                            parent.classList.remove('image-placeholder');
                        };
                        
                        lazyLoadObserver.unobserve(img);
                    }, 100 * id); // Escalonar carregamento para melhor performance
                }
            });
        }, { threshold: config.lazyLoadThreshold });
        
        lazyImages.forEach(img => {
            lazyLoadObserver.observe(img);
        });
    }

    // Melhorar navegação do menu
    function melhorarNavegacao() {
        // Adicionar indicador de navegação
        const navbar = document.querySelector('.navbar-nav');
        if (navbar) {
            const indicator = document.createElement('div');
            indicator.classList.add('nav-indicator');
            navbar.appendChild(indicator);
            
            // Posicionar indicador na página atual
            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) {
                posicionarIndicador(activeLink);
            }
            
            // Atualizar indicador ao clicar nos links
            elements.navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    elements.navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    posicionarIndicador(this);
                });
                
                // Efeito hover
                link.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('active')) {
                        posicionarIndicador(this, true);
                    }
                });
                
                link.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('active')) {
                        const activeLink = document.querySelector('.nav-link.active');
                        if (activeLink) {
                            posicionarIndicador(activeLink);
                        } else {
                            indicator.style.width = '0';
                        }
                    }
                });
            });
            
            // Atualizar indicador ao rolar a página
            window.addEventListener('scroll', () => {
                const sections = ['inicio', 'contextos', 'produtos', 'looks'];
                let currentSection = '';
                
                sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            currentSection = section;
                        }
                    }
                });
                
                if (currentSection) {
                    const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
                    if (activeLink) {
                        elements.navLinks.forEach(l => l.classList.remove('active'));
                        activeLink.classList.add('active');
                        posicionarIndicador(activeLink);
                    }
                }
            });
        }
        
        // Função para posicionar o indicador
        function posicionarIndicador(element, isHover = false) {
            const indicator = document.querySelector('.nav-indicator');
            if (!indicator) return;
            
            const width = element.offsetWidth;
            const left = element.offsetLeft;
            
            indicator.style.width = `${width}px`;
            indicator.style.left = `${left}px`;
            
            if (isHover) {
                indicator.style.opacity = '0.7';
            } else {
                indicator.style.opacity = '1';
            }
        }
    }

    // Melhorar acessibilidade
    function melhorarAcessibilidade() {
        // Adicionar atributos ARIA
        document.querySelectorAll('.product-card').forEach((card, index) => {
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Ver detalhes do produto ${index + 1}`);
            card.setAttribute('tabindex', '0');
            card.classList.add('keyboard-focus');
            
            // Permitir ativação por teclado
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        document.querySelectorAll('.filter-option').forEach(option => {
            option.setAttribute('role', 'button');
            option.setAttribute('tabindex', '0');
            option.classList.add('keyboard-focus');
            
            // Permitir ativação por teclado
            option.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Melhorar contraste
        document.querySelectorAll('.product-category, .context-tag').forEach(el => {
            el.style.color = '#16a085'; // Garantir contraste adequado
        });
    }

    // Melhorar formulário de newsletter
    function melhorarFormulario() {
        if (elements.newsletterForm) {
            elements.newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const input = this.querySelector('input');
                const email = input.value.trim();
                
                if (email && validateEmail(email)) {
                    // Simular envio
                    input.value = '';
                    mostrarNotificacao('Inscrição realizada com sucesso!', 'success');
                } else {
                    mostrarNotificacao('Por favor, insira um e-mail válido.', 'error');
                }
            });
        }
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }

    // Função para mostrar notificações
    function mostrarNotificacao(mensagem, tipo = 'success') {
        // Remover notificações existentes
        const notificacoesExistentes = document.querySelectorAll('.notification');
        notificacoesExistentes.forEach(notif => {
            notif.remove();
        });
        
        // Criar nova notificação
        const notificacao = document.createElement('div');
        notificacao.classList.add('notification', tipo);
        notificacao.textContent = mensagem;
        
        // Adicionar ao DOM
        document.body.appendChild(notificacao);
        
        // Mostrar com animação
        setTimeout(() => {
            notificacao.classList.add('show');
        }, 10);
        
        // Remover após alguns segundos
        setTimeout(() => {
            notificacao.classList.remove('show');
            setTimeout(() => {
                notificacao.remove();
            }, 300);
        }, config.notificationDuration);
    }

    // Melhorar performance de scroll
    function melhorarScroll() {
        let lastScrollTop = 0;
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    // Ocultar/mostrar navbar ao rolar
                    if (scrollTop > 100) {
                        if (scrollTop > lastScrollTop) {
                            // Rolando para baixo
                            elements.navbar.classList.add('navbar-hidden');
                        } else {
                            // Rolando para cima
                            elements.navbar.classList.remove('navbar-hidden');
                        }
                    } else {
                        elements.navbar.classList.remove('navbar-hidden');
                    }
                    
                    lastScrollTop = scrollTop;
                    ticking = false;
                });
                
                ticking = true;
            }
        });
        
        // Adicionar estilo para navbar oculta
        const style = document.createElement('style');
        style.textContent = `
            .navbar {
                transition: transform 0.3s ease;
            }
            .navbar-hidden {
                transform: translateY(-100%);
            }
        `;
        document.head.appendChild(style);
    }

    // Melhorar interação com favoritos
    function melhorarFavoritos() {
        // Verificar favoritos salvos
        const favoritosStorage = localStorage.getItem('favoritos');
        const favoritos = favoritosStorage ? JSON.parse(favoritosStorage) : [];
        
        // Atualizar botões de favoritos
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            const produtoId = btn.getAttribute('data-id');
            
            if (favoritos.includes(produtoId)) {
                btn.classList.add('active');
                btn.querySelector('i').classList.remove('bi-heart');
                btn.querySelector('i').classList.add('bi-heart-fill');
            }
            
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const produtoId = this.getAttribute('data-id');
                const index = favoritos.indexOf(produtoId);
                
                if (index === -1) {
                    // Adicionar aos favoritos
                    favoritos.push(produtoId);
                    this.classList.add('active');
                    this.querySelector('i').classList.remove('bi-heart');
                    this.querySelector('i').classList.add('bi-heart-fill');
                    mostrarNotificacao('Produto adicionado aos favoritos!');
                } else {
                    // Remover dos favoritos
                    favoritos.splice(index, 1);
                    this.classList.remove('active');
                    this.querySelector('i').classList.remove('bi-heart-fill');
                    this.querySelector('i').classList.add('bi-heart');
                    mostrarNotificacao('Produto removido dos favoritos.');
                }
                
                // Salvar no localStorage
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            });
        });
    }

    // Detectar preferências do usuário
    function detectarPreferencias() {
        // Verificar preferência de movimento reduzido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Desativar animações
            document.documentElement.style.setProperty('--transition', 'none');
            document.documentElement.style.setProperty('--transition-fast', 'none');
            document.documentElement.style.setProperty('--transition-slow', 'none');
            
            // Desativar animações de fade-in
            document.querySelectorAll('.animate-fade-in').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.transition = 'none';
            });
        }
        
        // Verificar preferência de modo escuro
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (prefersDarkMode) {
            // Adicionar classe para modo escuro
            document.documentElement.classList.add('dark-mode');
        }
    }

    // Otimizar carregamento de página
    function otimizarCarregamento() {
        // Adicionar classe para transição de página
        document.body.classList.add('page-transition');
        
        // Remover classe após carregamento
        window.addEventListener('load', () => {
            document.body.classList.remove('page-transition');
        });
        
        // Carregar recursos não críticos após o carregamento da página
        window.addEventListener('load', () => {
            // Pré-carregar imagens de produtos
            setTimeout(() => {
                const preloadLinks = document.querySelectorAll('.product-card');
                preloadLinks.forEach((card, index) => {
                    setTimeout(() => {
                        const img = card.querySelector('img');
                        if (img && img.src) {
                            const preloadLink = document.createElement('link');
                            preloadLink.rel = 'preload';
                            preloadLink.as = 'image';
                            preloadLink.href = img.src;
                            document.head.appendChild(preloadLink);
                        }
                    }, index * 100); // Escalonar para não sobrecarregar
                });
            }, 1000);
        });
    }

    // Inicializar tudo
    function inicializar() {
        // Otimizações de carregamento
        otimizarCarregamento();
        
        // Inicializar imagens com lazy loading
        inicializarImagens();
        
        // Melhorar navegação
        melhorarNavegacao();
        
        // Melhorar acessibilidade
        melhorarAcessibilidade();
        
        // Melhorar formulário
        melhorarFormulario();
        
        // Melhorar scroll
        melhorarScroll();
        
        // Melhorar favoritos
        melhorarFavoritos();
        
        // Detectar preferências
        detectarPreferencias();
        
        console.log('Otimizações de performance e usabilidade inicializadas com sucesso!');
    }

    // Inicializar quando o DOM estiver carregado
    inicializar();
});
