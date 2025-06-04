// Funcionalidades avançadas para o catálogo autoral
document.addEventListener('DOMContentLoaded', function() {
    // Configurações
    const config = {
        whatsappNumero: "5547988978095",
        animationSpeed: 400,
        filterDelay: 300
    };

    // Elementos DOM
    const elements = {
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
        contextCards: document.querySelectorAll('.context-card')
    };

    // Dados de produtos
    const produtos = [
        {
            id: 1,
            nome: "Camiseta Básica Premium",
            categoria: "Roupas",
            subcategoria: "Camisetas",
            contexto: "casual",
            genero: "masculino",
            preco: 49.90,
            precoAntigo: 69.90,
            descricao: "100% algodão, corte regular fit",
            descricaoCompleta: "Camiseta básica premium confeccionada em 100% algodão penteado de alta qualidade. Possui corte regular fit que proporciona conforto e caimento perfeito. Ideal para o dia a dia, pode ser combinada com diversas peças.",
            material: "100% Algodão",
            cor: "Branco",
            estilo: "Regular Fit",
            tamanhos: ["P", "M", "G", "GG"],
            avaliacao: 4.5,
            estoque: "Em estoque",
            promocao: true,
            desconto: "30%",
            imagens: [
                "img/produtos/camiseta_basica_1.jpg",
                "img/produtos/camiseta_basica_2.jpg",
                "img/produtos/camiseta_basica_3.jpg"
            ],
            tags: ["casual", "básico", "essencial", "algodão"]
        },
        {
            id: 2,
            nome: "Calça Jeans Slim",
            categoria: "Roupas",
            subcategoria: "Calças",
            contexto: "casual",
            genero: "masculino",
            preco: 149.90,
            descricao: "Jeans premium com elastano, lavagem média",
            descricaoCompleta: "Calça jeans slim confeccionada em tecido premium com elastano que proporciona conforto e mobilidade. Possui lavagem média, cinco bolsos e acabamento de qualidade. Versátil, pode ser usada em diversas ocasiões.",
            material: "98% Algodão, 2% Elastano",
            cor: "Azul Médio",
            estilo: "Slim Fit",
            tamanhos: ["38", "40", "42", "44", "46"],
            avaliacao: 4.0,
            estoque: "Em estoque",
            promocao: false,
            imagens: [
                "img/produtos/calca_jeans_1.jpg",
                "img/produtos/calca_jeans_2.jpg",
                "img/produtos/calca_jeans_3.jpg"
            ],
            tags: ["casual", "jeans", "slim", "versátil"]
        },
        {
            id: 3,
            nome: "Tênis Casual Branco",
            categoria: "Calçados",
            subcategoria: "Tênis",
            contexto: "casual",
            genero: "unissex",
            preco: 199.90,
            descricao: "Couro sintético, solado emborrachado",
            descricaoCompleta: "Tênis casual branco confeccionado em couro sintético de alta qualidade. Possui solado emborrachado antiderrapante, palmilha macia e confortável. Design clean e minimalista, combina com diversos looks.",
            material: "Couro Sintético",
            cor: "Branco",
            estilo: "Casual",
            tamanhos: ["37", "38", "39", "40", "41", "42", "43"],
            avaliacao: 5.0,
            estoque: "Poucas unidades",
            promocao: false,
            imagens: [
                "img/produtos/tenis_casual_1.jpg",
                "img/produtos/tenis_casual_2.jpg",
                "img/produtos/tenis_casual_3.jpg"
            ],
            tags: ["casual", "tênis", "branco", "versátil"]
        },
        {
            id: 4,
            nome: "Camisa Social Slim",
            categoria: "Roupas",
            subcategoria: "Camisas",
            contexto: "trabalho",
            genero: "masculino",
            preco: 129.90,
            descricao: "Algodão com elastano, corte slim fit",
            descricaoCompleta: "Camisa social slim confeccionada em algodão com elastano que proporciona conforto e caimento perfeito. Possui corte slim fit que valoriza a silhueta, botões perolizados e acabamento premium. Ideal para ambiente de trabalho.",
            material: "97% Algodão, 3% Elastano",
            cor: "Azul Claro",
            estilo: "Slim Fit",
            tamanhos: ["P", "M", "G", "GG"],
            avaliacao: 4.0,
            estoque: "Em estoque",
            promocao: false,
            imagens: [
                "img/produtos/camisa_social_1.jpg",
                "img/produtos/camisa_social_2.jpg",
                "img/produtos/camisa_social_3.jpg"
            ],
            tags: ["trabalho", "social", "formal", "slim"]
        },
        {
            id: 5,
            nome: "Blazer Feminino",
            categoria: "Roupas",
            subcategoria: "Blazers",
            contexto: "trabalho",
            genero: "feminino",
            preco: 172.90,
            precoAntigo: 229.90,
            descricao: "Tecido alfaiataria, corte slim, forro acetinado",
            descricaoCompleta: "Blazer feminino confeccionado em tecido de alfaiataria premium. Possui corte slim que valoriza a silhueta, forro acetinado, dois bolsos frontais e botões elegantes. Peça versátil que eleva qualquer look de trabalho.",
            material: "95% Poliéster, 5% Elastano",
            cor: "Preto",
            estilo: "Slim Fit",
            tamanhos: ["P", "M", "G", "GG"],
            avaliacao: 4.5,
            estoque: "Em estoque",
            promocao: true,
            desconto: "25%",
            imagens: [
                "img/produtos/blazer_feminino_1.jpg",
                "img/produtos/blazer_feminino_2.jpg",
                "img/produtos/blazer_feminino_3.jpg"
            ],
            tags: ["trabalho", "formal", "elegante", "blazer"]
        },
        {
            id: 6,
            nome: "Tênis Esportivo Running",
            categoria: "Calçados",
            subcategoria: "Tênis",
            contexto: "esporte",
            genero: "unissex",
            preco: 299.90,
            descricao: "Amortecimento gel, palmilha anatômica",
            descricaoCompleta: "Tênis esportivo para corrida com tecnologia de amortecimento em gel que absorve impactos. Possui palmilha anatômica, cabedal em mesh respirável e solado de borracha resistente à abrasão. Ideal para corridas e caminhadas.",
            material: "Mesh e Borracha",
            cor: "Preto/Verde",
            estilo: "Running",
            tamanhos: ["37", "38", "39", "40", "41", "42", "43"],
            avaliacao: 4.0,
            estoque: "Em estoque",
            promocao: false,
            imagens: [
                "img/produtos/tenis_esportivo_1.jpg",
                "img/produtos/tenis_esportivo_2.jpg",
                "img/produtos/tenis_esportivo_3.jpg"
            ],
            tags: ["esporte", "corrida", "running", "performance"]
        }
    ];

    // Dados de looks completos
    const looks = [
        {
            id: 1,
            nome: "Look Casual",
            descricao: "Perfeito para o dia a dia com conforto e estilo",
            preco: 349.70,
            contexto: "casual",
            genero: "masculino",
            produtos: [1, 2, 3], // IDs dos produtos que compõem o look
            imagem: "img/looks/look_casual.jpg"
        },
        {
            id: 2,
            nome: "Look Trabalho",
            descricao: "Elegância e profissionalismo para o ambiente corporativo",
            preco: 499.70,
            contexto: "trabalho",
            genero: "feminino",
            produtos: [4, 5], // IDs dos produtos que compõem o look
            imagem: "img/looks/look_trabalho.jpg"
        },
        {
            id: 3,
            nome: "Look Esporte",
            descricao: "Performance e estilo para suas atividades físicas",
            preco: 399.70,
            contexto: "esporte",
            genero: "unissex",
            produtos: [1, 6], // IDs dos produtos que compõem o look
            imagem: "img/looks/look_esporte.jpg"
        }
    ];

    // Função para criar imagens fictícias para o catálogo
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
        
        return canvas.toDataURL('image/jpeg');
    }

    // Função para formatar preço
    function formatarPreco(preco) {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    // Função para criar mensagem de WhatsApp
    function criarMensagemWhatsApp(produto) {
        const precoFormatado = formatarPreco(produto.preco);
        return encodeURIComponent(`Olá! Tenho interesse no produto: ${produto.nome} - ${precoFormatado}. Poderia me dar mais informações?`);
    }

    // Função para criar mensagem de WhatsApp para look completo
    function criarMensagemWhatsAppLook(look) {
        const precoFormatado = formatarPreco(look.preco);
        return encodeURIComponent(`Olá! Tenho interesse no ${look.nome} completo - ${precoFormatado}. Poderia me dar mais informações?`);
    }

    // Inicializar imagens
    function inicializarImagens() {
        // Imagem do banner
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.src = criarImagemPlaceholder('banner', 'Banner Principal', 0, 1200, 800);
        }
        
        // Imagens de contexto
        document.querySelectorAll('.context-image img').forEach((img, index) => {
            const contexto = img.alt.toLowerCase().includes('casual') ? 'casual' : 
                            img.alt.toLowerCase().includes('trabalho') ? 'trabalho' : 'esporte';
            img.src = criarImagemPlaceholder(contexto, contexto, index + 1, 600, 400);
        });
        
        // Imagens de produtos
        document.querySelectorAll('.product-image img').forEach((img, index) => {
            const produto = produtos[index % produtos.length];
            const contexto = produto ? produto.contexto : 'casual';
            img.src = criarImagemPlaceholder(contexto, produto ? produto.nome : 'Produto', index + 1, 400, 500);
        });
        
        // Imagens de looks
        document.querySelectorAll('.look-image img').forEach((img, index) => {
            const look = looks[index % looks.length];
            img.src = criarImagemPlaceholder('looks', look ? look.nome : 'Look', index + 1, 600, 800);
        });
        
        // Imagens do modal de visualização
        if (elements.productViewMainImage) {
            elements.productViewMainImage.src = criarImagemPlaceholder('casual', 'Produto Visualização', 1, 600, 600);
        }
        
        elements.productViewThumbnails.forEach((thumb, index) => {
            thumb.src = criarImagemPlaceholder('casual', 'Thumbnail', index + 1, 150, 150);
        });
    }

    // Sistema de filtros
    function inicializarFiltros() {
        elements.filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                const filterGroup = this.closest('.filter-group');
                const options = filterGroup.querySelectorAll('.filter-option');
                
                // Remover classe active de todas as opções do grupo
                options.forEach(opt => opt.classList.remove('active'));
                
                // Adicionar classe active à opção clicada
                this.classList.add('active');
                
                // Aplicar filtros
                aplicarFiltros();
            });
        });
    }

    // Função para aplicar filtros
    function aplicarFiltros() {
        // Obter filtros ativos
        const filtrosAtivos = {
            contexto: document.querySelector('.filter-group:nth-child(1) .filter-option.active').getAttribute('data-filter'),
            categoria: document.querySelector('.filter-group:nth-child(2) .filter-option.active').getAttribute('data-filter'),
            genero: document.querySelector('.filter-group:nth-child(3) .filter-option.active').getAttribute('data-filter'),
            preco: document.querySelector('.filter-group:nth-child(4) .filter-option.active').getAttribute('data-filter')
        };
        
        // Filtrar produtos
        const produtosContainer = document.getElementById('produtos-container');
        if (!produtosContainer) return;
        
        // Limpar container
        produtosContainer.innerHTML = '';
        
        // Filtrar produtos
        const produtosFiltrados = produtos.filter(produto => {
            // Filtro de contexto
            if (filtrosAtivos.contexto !== 'todos' && produto.contexto !== filtrosAtivos.contexto) {
                return false;
            }
            
            // Filtro de categoria
            if (filtrosAtivos.categoria !== 'todos' && produto.categoria.toLowerCase() !== filtrosAtivos.categoria) {
                return false;
            }
            
            // Filtro de gênero
            if (filtrosAtivos.genero !== 'todos' && produto.genero !== filtrosAtivos.genero && produto.genero !== 'unissex') {
                return false;
            }
            
            // Filtro de preço
            if (filtrosAtivos.preco !== 'todos') {
                if (filtrosAtivos.preco === 'ate100' && produto.preco > 100) {
                    return false;
                } else if (filtrosAtivos.preco === '100a200' && (produto.preco <= 100 || produto.preco > 200)) {
                    return false;
                } else if (filtrosAtivos.preco === 'acima200' && produto.preco <= 200) {
                    return false;
                }
            }
            
            return true;
        });
        
        // Renderizar produtos filtrados
        produtosFiltrados.forEach((produto, index) => {
            const produtoHTML = criarCardProduto(produto, index);
            produtosContainer.innerHTML += produtoHTML;
        });
        
        // Se não houver produtos, mostrar mensagem
        if (produtosFiltrados.length === 0) {
            produtosContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h3>Nenhum produto encontrado</h3>
                    <p>Tente outros filtros para encontrar o que procura.</p>
                </div>
            `;
        }
        
        // Reinicializar eventos dos novos cards
        inicializarEventosProdutos();
    }

    // Função para criar card de produto
    function criarCardProduto(produto, index) {
        const precoFormatado = formatarPreco(produto.preco);
        const precoAntigoFormatado = produto.precoAntigo ? formatarPreco(produto.precoAntigo) : '';
        const mensagemWhatsApp = criarMensagemWhatsApp(produto);
        const imagemSrc = criarImagemPlaceholder(produto.contexto, produto.nome, produto.id, 400, 500);
        const delay = (index % 3) + 2; // Delay de 2, 3 ou 4
        
        return `
            <div class="col-md-6 col-lg-4 animate-fade-in delay-${delay}">
                <div class="product-card" data-id="${produto.id}" data-context="${produto.contexto}" data-category="${produto.categoria.toLowerCase()}" data-gender="${produto.genero}">
                    <div class="product-image">
                        <img src="${imagemSrc}" alt="${produto.nome}">
                        ${produto.promocao ? `<div class="product-badge">-${produto.desconto}</div>` : ''}
                    </div>
                    <div class="product-content">
                        <div class="product-category">${produto.contexto.charAt(0).toUpperCase() + produto.contexto.slice(1)} • ${produto.categoria}</div>
                        <h3 class="product-title">${produto.nome}</h3>
                        <p class="product-description">${produto.descricao}</p>
                        <div class="product-price">
                            ${produto.precoAntigo ? `<span class="old-price">${precoAntigoFormatado}</span>` : ''}
                            ${precoFormatado}
                        </div>
                        <div class="product-actions">
                            <a href="https://wa.me/${config.whatsappNumero}?text=${mensagemWhatsApp}" class="btn btn-whatsapp">
                                <i class="bi bi-whatsapp"></i> Comprar
                            </a>
                            <button class="btn-favorite" data-id="${produto.id}">
                                <i class="bi bi-heart"></i>
                            </button>
                        </div>
                        <div class="product-meta">
                            <div class="product-rating">
                                ${criarEstrelas(produto.avaliacao)}
                                <span>${produto.avaliacao.toFixed(1)}</span>
                            </div>
                            <div class="product-availability ${produto.estoque.toLowerCase().includes('poucas') ? 'low' : ''}">${produto.estoque}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Função para criar estrelas de avaliação
    function criarEstrelas(avaliacao) {
        let estrelas = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(avaliacao)) {
                estrelas += '<i class="bi bi-star-fill"></i>';
            } else if (i - 0.5 <= avaliacao) {
                estrelas += '<i class="bi bi-star-half"></i>';
            } else {
                estrelas += '<i class="bi bi-star"></i>';
            }
        }
        return estrelas;
    }

    // Inicializar eventos de produtos
    function inicializarEventosProdutos() {
        // Botões de favorito
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    this.querySelector('i').classList.remove('bi-heart');
                    this.querySelector('i').classList.add('bi-heart-fill');
                } else {
                    this.querySelector('i').classList.remove('bi-heart-fill');
                    this.querySelector('i').classList.add('bi-heart');
                }
            });
        });
        
        // Cards de produto para abrir modal
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Não abrir modal se clicou no botão de compra ou favorito
                if (e.target.closest('.btn-whatsapp') || e.target.closest('.btn-favorite')) {
                    return;
                }
                
                const produtoId = parseInt(this.getAttribute('data-id'));
                const produto = produtos.find(p => p.id === produtoId);
                
                if (produto) {
                    abrirModalProduto(produto);
                }
            });
        });
    }

    // Função para abrir modal de produto
    function abrirModalProduto(produto) {
        if (!elements.productViewModal) return;
        
        // Preencher dados do produto no modal
        elements.productViewCategory.textContent = `${produto.contexto.charAt(0).toUpperCase() + produto.contexto.slice(1)} • ${produto.categoria}`;
        elements.productViewName.textContent = produto.nome;
        elements.productViewPrice.innerHTML = produto.precoAntigo ? 
            `<span class="old-price">${formatarPreco(produto.precoAntigo)}</span> ${formatarPreco(produto.preco)}` : 
            formatarPreco(produto.preco);
        elements.productViewDescription.textContent = produto.descricaoCompleta || produto.descricao;
        
        // Atualizar link do WhatsApp
        const mensagemWhatsApp = criarMensagemWhatsApp(produto);
        elements.productViewWhatsapp.href = `https://wa.me/${config.whatsappNumero}?text=${mensagemWhatsApp}`;
        
        // Atualizar imagem principal
        elements.productViewMainImage.src = criarImagemPlaceholder(produto.contexto, produto.nome, produto.id, 600, 600);
        
        // Atualizar miniaturas
        elements.productViewThumbnails.forEach((thumb, index) => {
            thumb.src = criarImagemPlaceholder(produto.contexto, `${produto.nome} ${index + 1}`, produto.id, 150, 150);
        });
        
        // Abrir modal
        elements.productViewModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impedir rolagem da página
    }

    // Função para fechar modal de produto
    function fecharModalProduto() {
        if (!elements.productViewModal) return;
        
        elements.productViewModal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar rolagem da página
    }

    // Inicializar navegação por contexto
    function inicializarNavegacaoContexto() {
        elements.contextCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Não executar se clicou no botão
                if (e.target.closest('.btn')) {
                    return;
                }
                
                const contexto = this.querySelector('.context-title').textContent.toLowerCase();
                
                // Rolar até a seção de produtos
                document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
                
                // Selecionar o filtro de contexto correspondente
                setTimeout(() => {
                    const filtroContexto = document.querySelector(`.filter-option[data-filter="${contexto}"]`);
                    if (filtroContexto) {
                        filtroContexto.click();
                    }
                }, 800);
            });
        });
    }

    // Inicializar botão voltar ao topo
    function inicializarBotaoVoltarTopo() {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                elements.btnVoltarTopo.classList.add('show');
            } else {
                elements.btnVoltarTopo.classList.remove('show');
            }
        });
        
        elements.btnVoltarTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Inicializar navegação suave
    function inicializarNavegacaoSuave() {
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
                    
                    // Atualizar classe active no menu
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }

    // Inicializar miniaturas do modal de produto
    function inicializarMiniaturasProduto() {
        elements.productViewThumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remover classe active de todas as miniaturas
                elements.productViewThumbnails.forEach(t => t.classList.remove('active'));
                
                // Adicionar classe active à miniatura clicada
                this.classList.add('active');
                
                // Atualizar imagem principal
                elements.productViewMainImage.src = this.src;
            });
        });
    }

    // Inicializar tamanhos do modal de produto
    function inicializarTamanhosProduto() {
        document.querySelectorAll('.product-view-size').forEach(size => {
            size.addEventListener('click', function() {
                // Remover classe active de todos os tamanhos
                document.querySelectorAll('.product-view-size').forEach(s => s.classList.remove('active'));
                
                // Adicionar classe active ao tamanho clicado
                this.classList.add('active');
            });
        });
    }

    // Inicializar animações
    function inicializarAnimacoes() {
        const animateElements = document.querySelectorAll('.animate-fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity ${config.animationSpeed}ms ease, transform ${config.animationSpeed}ms ease`;
            
            // Adicionar delay se especificado
            if (el.classList.contains('delay-1')) {
                el.style.transitionDelay = '100ms';
            } else if (el.classList.contains('delay-2')) {
                el.style.transitionDelay = '200ms';
            } else if (el.classList.contains('delay-3')) {
                el.style.transitionDelay = '300ms';
            } else if (el.classList.contains('delay-4')) {
                el.style.transitionDelay = '400ms';
            } else if (el.classList.contains('delay-5')) {
                el.style.transitionDelay = '500ms';
            }
            
            observer.observe(el);
        });
    }

    // Inicializar eventos
    function inicializarEventos() {
        // Fechar modal de produto
        if (elements.closeProductView) {
            elements.closeProductView.addEventListener('click', fecharModalProduto);
        }
        
        // Fechar modal ao clicar fora
        if (elements.productViewModal) {
            elements.productViewModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    fecharModalProduto();
                }
            });
        }
        
        // Fechar modal ao pressionar ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                fecharModalProduto();
            }
        });
    }

    // Inicializar tudo
    function inicializar() {
        inicializarImagens();
        inicializarFiltros();
        inicializarEventosProdutos();
        inicializarNavegacaoContexto();
        inicializarBotaoVoltarTopo();
        inicializarNavegacaoSuave();
        inicializarMiniaturasProduto();
        inicializarTamanhosProduto();
        inicializarAnimacoes();
        inicializarEventos();
        
        console.log('Catálogo autoral inicializado com sucesso!');
    }

    // Inicializar quando o DOM estiver carregado
    inicializar();
});
