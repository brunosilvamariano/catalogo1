// Funcionalidade de paginação para camisetas e tênis

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar produtos da página 3 para camisetas
    const produtosContainer = document.getElementById('produtos-container');
    if (produtosContainer) {
        // Verificar se o script da página 3 foi carregado
        if (typeof camisetasPagina3 !== 'undefined') {
            produtosContainer.innerHTML += camisetasPagina3;
        }
    }
    
    // Paginação para camisetas
    setupPagination('camisetas');
    
    // Paginação para tênis
    setupPagination('tenis');
    
    // Função para configurar a paginação
    function setupPagination(section) {
        console.log(`Configurando paginação para: ${section}`);
        
        const paginationItems = document.querySelectorAll(`.${section}-pagination li[data-page]`);
        const prevButton = document.getElementById(`${section}-prev`);
        const nextButton = document.getElementById(`${section}-next`);
        const items = document.querySelectorAll(`.${section}-item`);
        
        console.log(`Encontrados ${paginationItems.length} itens de paginação e ${items.length} produtos`);
        
        if (!paginationItems.length || !items.length) {
            console.log(`Paginação não configurada para ${section}: elementos não encontrados`);
            return;
        }
        
        // Função para mostrar uma página específica
        function showPage(pageNum) {
            console.log(`Mostrando página ${pageNum} para ${section}`);
            
            // Esconder todos os itens
            items.forEach(item => {
                item.style.display = 'none';
            });
            
            // Mostrar apenas os itens da página atual
            const pageItems = document.querySelectorAll(`.${section}-item[data-page="${pageNum}"]`);
            console.log(`Itens na página ${pageNum}: ${pageItems.length}`);
            
            pageItems.forEach(item => {
                item.style.display = 'block';
            });
            
            // Atualizar estado ativo na paginação
            paginationItems.forEach(item => {
                item.classList.remove('active');
                if (parseInt(item.dataset.page) === pageNum) {
                    item.classList.add('active');
                }
            });
            
            // Atualizar estado dos botões prev/next
            if (pageNum === 1) {
                prevButton.classList.add('disabled');
            } else {
                prevButton.classList.remove('disabled');
            }
            
            if (pageNum === paginationItems.length) {
                nextButton.classList.add('disabled');
            } else {
                nextButton.classList.remove('disabled');
            }
        }
        
        // Configurar cliques nos números de página
        paginationItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const pageNum = parseInt(this.dataset.page);
                console.log(`Clique na página ${pageNum} para ${section}`);
                showPage(pageNum);
            });
        });
        
        // Configurar botão anterior
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.classList.contains('disabled')) return;
                
                const activePage = document.querySelector(`.${section}-pagination li.active`);
                if (!activePage) return;
                
                const pageNum = parseInt(activePage.dataset.page);
                if (pageNum > 1) {
                    showPage(pageNum - 1);
                }
            });
        }
        
        // Configurar botão próximo
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.classList.contains('disabled')) return;
                
                const activePage = document.querySelector(`.${section}-pagination li.active`);
                if (!activePage) return;
                
                const pageNum = parseInt(activePage.dataset.page);
                if (pageNum < paginationItems.length) {
                    showPage(pageNum + 1);
                }
            });
        }
        
        // Inicializar na página 1
        showPage(1);
        console.log(`Paginação inicializada para ${section}`);
    }
});
