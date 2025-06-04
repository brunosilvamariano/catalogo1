// Configuração modular para o catálogo - Versão Simplificada
const catalogoConfig = {
    // Configurações gerais
    nome: "Catálogo de Moda",
    whatsappNumero: "5547988978095",
    
    // Configurações de visualização
    itensPorPagina: 4,
    mostrarPromocoes: true,
    
    // Categorias principais
    categorias: [
        { id: "roupas", nome: "Roupas", icone: "bi-tshirt" },
        { id: "calcados", nome: "Calçados", icone: "bi-boot" }
    ],
    
    // Subcategorias por categoria principal - Versão Simplificada
    subcategorias: {
        roupas: [
            { id: "camisetas", nome: "Camisetas e Blusas" },
            { id: "calcas", nome: "Calças e Shorts" },
            { id: "casacos", nome: "Casacos e Jaquetas" }
        ],
        calcados: [
            { id: "tenis", nome: "Tênis" }
        ]
    },
    
    // Filtros simplificados
    filtros: {
        roupas: ["Masculino", "Feminino"],
        calcados: ["Masculino", "Feminino"]
    }
};

// Dados de produtos - Versão Simplificada
const produtosData = {
    roupas: {
        camisetas: [
            { 
                id: 1, 
                nome: "Camiseta Básica Branca", 
                preco: 49.90, 
                descricao: "Camiseta 100% algodão, corte regular fit",
                filtros: ["Masculino", "Feminino"],
                promocao: true,
                precoAntigo: 69.90,
                desconto: "30%",
                tempoRestante: "2d 5h"
            },
            { 
                id: 2, 
                nome: "Camiseta Estampada", 
                preco: 59.90, 
                descricao: "Estampa exclusiva, tecido macio e confortável",
                filtros: ["Masculino"]
            },
            { 
                id: 3, 
                nome: "Blusa Feminina Manga Longa", 
                preco: 79.90, 
                descricao: "Tecido leve e fluido, ideal para meia estação",
                filtros: ["Feminino"]
            },
            { 
                id: 4, 
                nome: "Camisa Social Slim", 
                preco: 129.90, 
                descricao: "Tecido em algodão com elastano, corte slim fit",
                filtros: ["Masculino"]
            },
            { 
                id: 5, 
                nome: "Camiseta Oversized", 
                preco: 69.90, 
                descricao: "Modelo amplo e confortável, tecido premium",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 6, 
                nome: "Blusa Cropped", 
                preco: 49.90, 
                descricao: "Modelo curto, tecido canelado de alta qualidade",
                filtros: ["Feminino"],
                promocao: true,
                precoAntigo: 79.90,
                desconto: "40%",
                tempoRestante: "1d 12h"
            },
            { 
                id: 7, 
                nome: "Camisa Polo", 
                preco: 89.90, 
                descricao: "Tecido piquet, acabamento premium",
                filtros: ["Masculino"]
            },
            { 
                id: 8, 
                nome: "Camiseta Esportiva", 
                preco: 69.90, 
                descricao: "Tecido dry-fit, ideal para atividades físicas",
                filtros: ["Masculino", "Feminino"]
            }
        ],
        calcas: [
            { 
                id: 9, 
                nome: "Calça Jeans Masculina", 
                preco: 149.90, 
                descricao: "Jeans premium com lavagem média, corte reto",
                filtros: ["Masculino"]
            },
            { 
                id: 10, 
                nome: "Calça Social Feminina", 
                preco: 139.90, 
                descricao: "Tecido alfaiataria, corte reto, cintura alta",
                filtros: ["Feminino"]
            },
            { 
                id: 11, 
                nome: "Bermuda Jeans", 
                preco: 89.90, 
                descricao: "Jeans com elastano, acabamento premium",
                filtros: ["Masculino"],
                promocao: true,
                precoAntigo: 119.90,
                desconto: "25%",
                tempoRestante: "3d 8h"
            },
            { 
                id: 12, 
                nome: "Short Feminino", 
                preco: 79.90, 
                descricao: "Tecido leve com cintura alta e amarração",
                filtros: ["Feminino"]
            },
            { 
                id: 13, 
                nome: "Calça Jogger", 
                preco: 119.90, 
                descricao: "Modelo esportivo com elástico no tornozelo",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 14, 
                nome: "Calça Legging", 
                preco: 89.90, 
                descricao: "Alta compressão, tecido tecnológico",
                filtros: ["Feminino"]
            },
            { 
                id: 15, 
                nome: "Calça Cargo", 
                preco: 159.90, 
                descricao: "Múltiplos bolsos, tecido resistente",
                filtros: ["Masculino"]
            },
            { 
                id: 16, 
                nome: "Short Praia", 
                preco: 69.90, 
                descricao: "Tecido de secagem rápida, estampas exclusivas",
                filtros: ["Masculino"]
            }
        ],
        casacos: [
            { 
                id: 25, 
                nome: "Jaqueta Jeans Oversized", 
                preco: 199.90, 
                descricao: "Jeans premium, lavagem clara, modelo oversized",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 26, 
                nome: "Casaco de Inverno", 
                preco: 299.90, 
                descricao: "Tecido impermeável, forro térmico, capuz removível",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 27, 
                nome: "Moletom Unissex", 
                preco: 149.90, 
                descricao: "Moletom flanelado, bolso canguru, capuz",
                filtros: ["Masculino", "Feminino"],
                promocao: true,
                precoAntigo: 199.90,
                desconto: "25%",
                tempoRestante: "2d 18h"
            },
            { 
                id: 28, 
                nome: "Blazer Feminino", 
                preco: 229.90, 
                descricao: "Tecido alfaiataria, corte slim, forro acetinado",
                filtros: ["Feminino"]
            },
            { 
                id: 29, 
                nome: "Jaqueta Corta Vento", 
                preco: 179.90, 
                descricao: "Leve e impermeável, dobrável em bolso",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 30, 
                nome: "Cardigan Tricot", 
                preco: 159.90, 
                descricao: "Tricot macio, modelo alongado, botões frontais",
                filtros: ["Feminino"]
            },
            { 
                id: 31, 
                nome: "Blazer Masculino", 
                preco: 259.90, 
                descricao: "Tecido premium, corte slim, forro interno",
                filtros: ["Masculino"]
            },
            { 
                id: 32, 
                nome: "Jaqueta Bomber", 
                preco: 219.90, 
                descricao: "Estilo clássico, zíper frontal, bolsos laterais",
                filtros: ["Masculino"]
            }
        ]
    },
    calcados: {
        tenis: [
            { 
                id: 33, 
                nome: "Tênis Esportivo Running", 
                preco: 299.90, 
                descricao: "Amortecimento gel, palmilha anatômica, respirável",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 34, 
                nome: "Tênis Casual Branco", 
                preco: 199.90, 
                descricao: "Couro sintético, solado emborrachado, confortável",
                filtros: ["Masculino", "Feminino"],
                promocao: true,
                precoAntigo: 249.90,
                desconto: "20%",
                tempoRestante: "3d 22h"
            },
            { 
                id: 35, 
                nome: "Tênis de Corrida", 
                preco: 349.90, 
                descricao: "Tecnologia de amortecimento, leve e responsivo",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 36, 
                nome: "Tênis Slip On", 
                preco: 159.90, 
                descricao: "Tecido elástico, solado flexível, fácil de calçar",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 37, 
                nome: "Tênis Skatista", 
                preco: 229.90, 
                descricao: "Solado resistente, reforço no calcanhar",
                filtros: ["Masculino", "Feminino"]
            },
            { 
                id: 38, 
                nome: "Tênis Chunky", 
                preco: 259.90, 
                descricao: "Solado alto, design moderno, confortável",
                filtros: ["Feminino"]
            },
            { 
                id: 39, 
                nome: "Tênis Basquete", 
                preco: 329.90, 
                descricao: "Cano alto, amortecimento premium, estabilidade",
                filtros: ["Masculino"]
            },
            { 
                id: 40, 
                nome: "Tênis Caminhada", 
                preco: 279.90, 
                descricao: "Impermeável, solado antiderrapante, durável",
                filtros: ["Masculino", "Feminino"]
            }
        ]
    }
};

// Função para criar imagens fictícias para o catálogo
function criarImagemPlaceholder(categoria, tipo, numero, largura, altura) {
    const canvas = document.createElement('canvas');
    canvas.width = largura;
    canvas.height = altura;
    const ctx = canvas.getContext('2d');
    
    // Definir cores de fundo neutras
    let corFundo;
    if (categoria === 'roupas') {
        const cores = ['#f0f0f0', '#e6e6e6', '#f5f5f5', '#ebebeb'];
        corFundo = cores[numero % cores.length];
    } else {
        const cores = ['#e9e9e9', '#f2f2f2', '#ededed', '#f7f7f7'];
        corFundo = cores[numero % cores.length];
    }
    
    // Preencher fundo
    ctx.fillStyle = corFundo;
    ctx.fillRect(0, 0, largura, altura);
    
    // Adicionar borda
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 2;
    ctx.strokeRect(5, 5, largura - 10, altura - 10);
    
    // Adicionar texto
    ctx.fillStyle = '#555555';
    ctx.font = 'bold 20px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText(`${tipo}`, largura / 2, altura / 2 - 15);
    ctx.font = '16px Roboto';
    ctx.fillText(`${largura}x${altura}`, largura / 2, altura / 2 + 15);
    
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

// Função para criar card de produto
function criarCardProduto(produto, categoria, subcategoria) {
    const precoFormatado = formatarPreco(produto.preco);
    const mensagemWhatsApp = criarMensagemWhatsApp(produto);
    const imagemSrc = criarImagemPlaceholder(categoria, subcategoria, produto.id, 400, 500);
    
    let cardHTML = `
        <div class="col-md-6 col-lg-3 mb-4 produto-item" data-id="${produto.id}" data-filtros="${produto.filtros.join(',').toLowerCase()}">
            <div class="card produto-card">
                ${produto.promocao ? `<div class="promocao-badge">-${produto.desconto}</div>` : ''}
                <img src="${imagemSrc}" class="card-img-top" alt="${produto.nome}">
                ${produto.promocao ? `<div class="promocao-timer">Termina em: ${produto.tempoRestante}</div>` : ''}
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <div class="produto-preco mb-3">
                        ${produto.promocao ? `<span class="preco-antigo">${formatarPreco(produto.precoAntigo)}</span>` : ''}
                        <span class="preco-atual">${precoFormatado}</span>
                    </div>
                    <a href="https://wa.me/${catalogoConfig.whatsappNumero}?text=${mensagemWhatsApp}" 
                       class="btn btn-whatsapp w-100" 
                       target="_blank">
                        <i class="bi bi-whatsapp"></i> Comprar pelo WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
    
    return cardHTML;
}

// Função para criar seção de promoções
function criarSecaoPromocoes() {
    const promocoesContainer = document.getElementById('promocoes-container');
    if (!promocoesContainer) return;
    
    let promocoes = [];
    
    // Coletar todos os produtos em promoção
    Object.keys(produtosData).forEach(categoria => {
        Object.keys(produtosData[categoria]).forEach(subcategoria => {
            produtosData[categoria][subcategoria].forEach(produto => {
                if (produto.promocao) {
                    promocoes.push({
                        produto: produto,
                        categoria: categoria,
                        subcategoria: subcategoria
                    });
                }
            });
        });
    });
    
    // Limitar a 4 promoções
    promocoes = promocoes.slice(0, 4);
    
    // Criar HTML para promoções
    let promocoesHTML = '';
    promocoes.forEach(item => {
        promocoesHTML += criarCardProduto(item.produto, item.categoria, item.subcategoria);
    });
    
    promocoesContainer.innerHTML = promocoesHTML;
}

// Função para criar filtros simplificados
function criarFiltros(categoria) {
    const filtrosContainer = document.getElementById(`filtros-${categoria}`);
    if (!filtrosContainer) return;
    
    const filtros = catalogoConfig.filtros[categoria];
    let filtrosHTML = `
        <div class="filtro-btn active" data-filtro="todos">Todos</div>
    `;
    
    filtros.forEach(filtro => {
        filtrosHTML += `
            <div class="filtro-btn" data-filtro="${filtro.toLowerCase()}">${filtro}</div>
        `;
    });
    
    filtrosContainer.innerHTML = filtrosHTML;
    
    // Adicionar eventos aos filtros
    const botoesFiltro = filtrosContainer.querySelectorAll('.filtro-btn');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remover classe active de todos os botões
            botoesFiltro.forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar produtos
            const filtro = this.getAttribute('data-filtro');
            filtrarProdutos(categoria, filtro);
        });
    });
}

// Função para filtrar produtos
function filtrarProdutos(categoria, filtro) {
    const produtosContainer = document.querySelectorAll(`#${categoria} .produto-item`);
    
    produtosContainer.forEach(produto => {
        if (filtro === 'todos') {
            produto.style.display = 'block';
        } else {
            const filtrosProduto = produto.getAttribute('data-filtros');
            if (filtrosProduto && filtrosProduto.includes(filtro)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        }
    });
}

// Função para carregar produtos iniciais
function carregarProdutosIniciais() {
    // Para cada categoria
    Object.keys(produtosData).forEach(categoria => {
        // Para cada subcategoria
        Object.keys(produtosData[categoria]).forEach(subcategoria => {
            const subcategoriaContainer = document.querySelector(`#${categoria} .${subcategoria}-container .row`);
            if (!subcategoriaContainer) return;
            
            // Limpar conteúdo existente
            subcategoriaContainer.innerHTML = '';
            
            // Obter produtos da subcategoria
            const produtos = produtosData[categoria][subcategoria];
            
            // Mostrar apenas os primeiros N produtos
            const produtosIniciais = produtos.slice(0, catalogoConfig.itensPorPagina);
            
            // Adicionar produtos ao container
            produtosIniciais.forEach(produto => {
                subcategoriaContainer.innerHTML += criarCardProduto(produto, categoria, subcategoria);
            });
            
            // Verificar se há mais produtos para mostrar
            const verMaisContainer = document.querySelector(`#${categoria} .${subcategoria}-container .ver-mais-container`);
            if (verMaisContainer) {
                if (produtos.length > catalogoConfig.itensPorPagina) {
                    verMaisContainer.style.display = 'block';
                } else {
                    verMaisContainer.style.display = 'none';
                }
            }
        });
    });
}

// Função para ver mais produtos
function verMaisProdutos(categoria, subcategoria) {
    const subcategoriaContainer = document.querySelector(`#${categoria} .${subcategoria}-container .row`);
    const verMaisBtn = document.querySelector(`#${categoria} .${subcategoria}-container .btn-ver-mais`);
    const verMenosBtn = document.querySelector(`#${categoria} .${subcategoria}-container .btn-ver-menos`);
    
    if (!subcategoriaContainer || !verMaisBtn || !verMenosBtn) return;
    
    // Obter produtos da subcategoria
    const produtos = produtosData[categoria][subcategoria];
    
    // Mostrar todos os produtos
    subcategoriaContainer.innerHTML = '';
    produtos.forEach(produto => {
        subcategoriaContainer.innerHTML += criarCardProduto(produto, categoria, subcategoria);
    });
    
    // Esconder botão Ver Mais e mostrar botão Ver Menos
    verMaisBtn.style.display = 'none';
    verMenosBtn.style.display = 'block';
}

// Função para ver menos produtos
function verMenosProdutos(categoria, subcategoria) {
    const subcategoriaContainer = document.querySelector(`#${categoria} .${subcategoria}-container .row`);
    const verMaisBtn = document.querySelector(`#${categoria} .${subcategoria}-container .btn-ver-mais`);
    const verMenosBtn = document.querySelector(`#${categoria} .${subcategoria}-container .btn-ver-menos`);
    
    if (!subcategoriaContainer || !verMaisBtn || !verMenosBtn) return;
    
    // Obter produtos da subcategoria
    const produtos = produtosData[categoria][subcategoria];
    
    // Mostrar apenas os primeiros N produtos
    subcategoriaContainer.innerHTML = '';
    const produtosIniciais = produtos.slice(0, catalogoConfig.itensPorPagina);
    produtosIniciais.forEach(produto => {
        subcategoriaContainer.innerHTML += criarCardProduto(produto, categoria, subcategoria);
    });
    
    // Esconder botão Ver Menos e mostrar botão Ver Mais
    verMenosBtn.style.display = 'none';
    verMaisBtn.style.display = 'block';
    
    // Rolar para o topo da seção
    const subcategoriaTitulo = document.querySelector(`#${categoria} .${subcategoria}-container .subcategoria-titulo`);
    if (subcategoriaTitulo) {
        subcategoriaTitulo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Inicializar catálogo quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Gerar imagens para banner e categorias
    const bannerImg = document.querySelector('.banner-wrapper img');
    if (bannerImg) {
        bannerImg.src = criarImagemPlaceholder('banner', 'Banner Principal', 0, 1200, 600);
    }
    
    // Imagens para categorias
    document.querySelectorAll('.categoria-item img').forEach((img, index) => {
        const categoria = img.getAttribute('alt').toLowerCase();
        img.src = criarImagemPlaceholder('categorias', categoria, index, 600, 400);
    });
    
    // Criar seção de promoções
    if (catalogoConfig.mostrarPromocoes) {
        criarSecaoPromocoes();
    }
    
    // Criar filtros para cada categoria
    Object.keys(catalogoConfig.filtros).forEach(categoria => {
        criarFiltros(categoria);
    });
    
    // Carregar produtos iniciais
    carregarProdutosIniciais();
    
    // Configurar botão Voltar ao Topo
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');
    if (btnVoltarTopo) {
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
    }
    
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
    
    // Configurar botões Ver Mais e Ver Menos
    document.querySelectorAll('.btn-ver-mais').forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            const subcategoria = this.getAttribute('data-subcategoria');
            verMaisProdutos(categoria, subcategoria);
        });
    });
    
    document.querySelectorAll('.btn-ver-menos').forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            const subcategoria = this.getAttribute('data-subcategoria');
            verMenosProdutos(categoria, subcategoria);
        });
    });
    
    // Adicionar animações aos elementos - mais suaves
    const animateElements = document.querySelectorAll('.animate-fade-in');
    animateElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 80 * index);
    });
});
