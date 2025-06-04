// Criando imagens fictícias para o catálogo
// Estas seriam substituídas por imagens reais em um ambiente de produção

// Função para criar uma imagem de placeholder com texto
function criarImagemPlaceholder(categoria, tipo, numero, largura, altura) {
    const canvas = document.createElement('canvas');
    canvas.width = largura;
    canvas.height = altura;
    const ctx = canvas.getContext('2d');
    
    // Definir cores de fundo baseadas na categoria
    let corFundo;
    if (categoria === 'roupas') {
        const cores = ['#f0e6ff', '#e6f2ff', '#ffe6e6', '#e6ffe6'];
        corFundo = cores[numero % cores.length];
    } else {
        const cores = ['#fff2e6', '#e6fffa', '#ffe6f0', '#f2ffe6'];
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
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 20px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText(`${tipo}`, largura / 2, altura / 2 - 15);
    ctx.font = '16px Roboto';
    ctx.fillText(`${largura}x${altura}`, largura / 2, altura / 2 + 15);
    
    return canvas.toDataURL('image/jpeg');
}

// Gerar imagens para categorias
document.addEventListener('DOMContentLoaded', function() {
    // Imagens para banner e categorias
    const bannerImg = document.querySelector('.banner-wrapper img');
    if (bannerImg) {
        bannerImg.src = criarImagemPlaceholder('banner', 'Banner Principal', 0, 1200, 600);
    }
    
    const categoriaRoupasImg = document.querySelector('img[alt="Roupas"]');
    if (categoriaRoupasImg) {
        categoriaRoupasImg.src = criarImagemPlaceholder('categorias', 'Roupas', 1, 600, 400);
    }
    
    const categoriaCalcadosImg = document.querySelector('img[alt="Calçados"]');
    if (categoriaCalcadosImg) {
        categoriaCalcadosImg.src = criarImagemPlaceholder('categorias', 'Calçados', 2, 600, 400);
    }
    
    // Adicionar cards de produtos dinamicamente
    adicionarProdutos();
});

// Função para adicionar produtos ao catálogo
function adicionarProdutos() {
    // Dados fictícios de produtos
    const produtos = {
        roupas: {
            camisetas: [
                { nome: 'Camiseta Básica Branca', preco: 49.90, descricao: 'Camiseta 100% algodão, corte regular fit' },
                { nome: 'Camiseta Estampada', preco: 59.90, descricao: 'Estampa exclusiva, tecido macio e confortável' },
                { nome: 'Blusa Feminina Manga Longa', preco: 79.90, descricao: 'Tecido leve e fluido, ideal para meia estação' },
                { nome: 'Camisa Social Slim', preco: 129.90, descricao: 'Tecido em algodão com elastano, corte slim fit' }
            ],
            calcas: [
                { nome: 'Calça Jeans Masculina', preco: 149.90, descricao: 'Jeans premium com lavagem média, corte reto' },
                { nome: 'Calça Social Feminina', preco: 139.90, descricao: 'Tecido alfaiataria, corte reto, cintura alta' },
                { nome: 'Bermuda Jeans', preco: 89.90, descricao: 'Jeans com elastano, acabamento premium' },
                { nome: 'Short Feminino', preco: 79.90, descricao: 'Tecido leve com cintura alta e amarração' }
            ],
            vestidos: [
                { nome: 'Vestido Casual Midi', preco: 159.90, descricao: 'Tecido viscose, estampa floral, manga curta' },
                { nome: 'Vestido Festa Longo', preco: 259.90, descricao: 'Tecido cetim, decote V, fenda lateral' },
                { nome: 'Saia Jeans Curta', preco: 99.90, descricao: 'Jeans com elastano, cintura alta' },
                { nome: 'Saia Longa Estampada', preco: 119.90, descricao: 'Tecido leve e fluido, estampa exclusiva' }
            ],
            casacos: [
                { nome: 'Jaqueta Jeans Oversized', preco: 199.90, descricao: 'Jeans premium, lavagem clara, modelo oversized' },
                { nome: 'Casaco de Inverno', preco: 299.90, descricao: 'Tecido impermeável, forro térmico, capuz removível' },
                { nome: 'Moletom Unissex', preco: 149.90, descricao: 'Moletom flanelado, bolso canguru, capuz' },
                { nome: 'Blazer Feminino', preco: 229.90, descricao: 'Tecido alfaiataria, corte slim, forro acetinado' }
            ]
        },
        calcados: {
            tenis: [
                { nome: 'Tênis Esportivo Running', preco: 299.90, descricao: 'Amortecimento gel, palmilha anatômica, respirável' },
                { nome: 'Tênis Casual Branco', preco: 199.90, descricao: 'Couro sintético, solado emborrachado, confortável' },
                { nome: 'Tênis de Corrida', preco: 349.90, descricao: 'Tecnologia de amortecimento, leve e responsivo' },
                { nome: 'Tênis Slip On', preco: 159.90, descricao: 'Tecido elástico, solado flexível, fácil de calçar' }
            ],
            sapatos: [
                { nome: 'Sapato Social Masculino', preco: 229.90, descricao: 'Couro legítimo, solado de borracha, confortável' },
                { nome: 'Scarpin Feminino', preco: 189.90, descricao: 'Salto médio 7cm, bico fino, couro sintético' },
                { nome: 'Mocassim Masculino', preco: 199.90, descricao: 'Couro legítimo, solado flexível, palmilha macia' },
                { nome: 'Oxford Feminino', preco: 179.90, descricao: 'Couro sintético, cadarço, solado tratorado' }
            ],
            sandalias: [
                { nome: 'Sandália Feminina Salto', preco: 159.90, descricao: 'Salto bloco 8cm, tiras finas, fivela ajustável' },
                { nome: 'Sandália Masculina', preco: 129.90, descricao: 'Couro, solado emborrachado, tiras ajustáveis' },
                { nome: 'Chinelo Slide', preco: 89.90, descricao: 'Material emborrachado, palmilha anatômica' },
                { nome: 'Rasteirinha Feminina', preco: 99.90, descricao: 'Material sintético, tiras decoradas, confortável' }
            ],
            botas: [
                { nome: 'Bota Feminina Cano Curto', preco: 229.90, descricao: 'Couro sintético, salto bloco 5cm, zíper lateral' },
                { nome: 'Bota Masculina Casual', preco: 259.90, descricao: 'Couro, cano médio, cadarço e zíper' },
                { nome: 'Coturno Feminino', preco: 249.90, descricao: 'Material sintético, cadarço, solado tratorado' },
                { nome: 'Bota Masculina Adventure', preco: 279.90, descricao: 'Couro impermeável, cano alto, solado antiderrapante' }
            ]
        }
    };
    
    // Adicionar produtos de roupas
    adicionarCategoriaProdutos('camisetas', produtos.roupas.camisetas, 'roupas');
    adicionarCategoriaProdutos('calcas', produtos.roupas.calcas, 'roupas');
    adicionarCategoriaProdutos('vestidos', produtos.roupas.vestidos, 'roupas');
    adicionarCategoriaProdutos('casacos', produtos.roupas.casacos, 'roupas');
    
    // Adicionar produtos de calçados
    adicionarCategoriaProdutos('tenis', produtos.calcados.tenis, 'calcados');
    adicionarCategoriaProdutos('sapatos', produtos.calcados.sapatos, 'calcados');
    adicionarCategoriaProdutos('sandalias', produtos.calcados.sandalias, 'calcados');
    adicionarCategoriaProdutos('botas', produtos.calcados.botas, 'calcados');
}

// Função para adicionar produtos por categoria
function adicionarCategoriaProdutos(subcategoria, produtos, categoria) {
    // Mapear subcategorias para títulos em português
    const subcategoriasMap = {
        camisetas: 'Camisetas e Blusas',
        calcas: 'Calças e Shorts',
        vestidos: 'Vestidos e Saias',
        casacos: 'Casacos e Jaquetas',
        tenis: 'Tênis',
        sapatos: 'Sapatos Sociais',
        sandalias: 'Sandálias e Chinelos',
        botas: 'Botas'
    };
    
    // Encontrar o container da subcategoria
    const subcategoriaTitle = subcategoriasMap[subcategoria];
    const subcategoriaContainer = Array.from(document.querySelectorAll('h3.subcategoria-titulo')).find(
        el => el.textContent === subcategoriaTitle
    );
    
    if (subcategoriaContainer) {
        const rowContainer = subcategoriaContainer.nextElementSibling;
        
        // Limpar conteúdo existente
        rowContainer.innerHTML = '';
        
        // Adicionar produtos
        produtos.forEach((produto, index) => {
            const produtoCard = document.createElement('div');
            produtoCard.className = 'col-md-6 col-lg-3 mb-4';
            
            // Formatar preço
            const precoFormatado = produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            
            // Criar mensagem para WhatsApp
            const mensagemWhatsApp = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto.nome} - ${precoFormatado}. Poderia me dar mais informações?`);
            
            // Gerar imagem placeholder
            const imagemSrc = criarImagemPlaceholder(categoria, subcategoria, index, 400, 500);
            
            produtoCard.innerHTML = `
                <div class="card produto-card">
                    <img src="${imagemSrc}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <p class="produto-preco mb-3">${precoFormatado}</p>
                        <a href="https://wa.me/5547988978095?text=${mensagemWhatsApp}" 
                           class="btn btn-whatsapp w-100" 
                           target="_blank">
                            <i class="bi bi-whatsapp"></i> Comprar pelo WhatsApp
                        </a>
                    </div>
                </div>
            `;
            
            rowContainer.appendChild(produtoCard);
        });
    }
}
