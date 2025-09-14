// Carousel Functionality for Box Office
class MovieCarousel {
    constructor() {
        this.carousel = document.querySelector('.carousel-container');
        this.items = document.querySelectorAll('.carousel-item');
        this.totalItems = this.items.length;
        this.currentIndex = 0;
        this.isPlaying = true;
        this.intervalTime = 4000; // 4 segundos
        this.autoplayInterval = null;
        
        this.init();
    }

    init() {
        if (this.totalItems === 0) return;
        
        this.createControls();
        this.createIndicators();
        this.setupEventListeners();
        this.startAutoplay();
        this.showItem(0);
    }

    createControls() {
        // Criar botões de navegação
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-btn carousel-btn-prev';
        prevButton.innerHTML = '&#8249;'; // ‹
        prevButton.setAttribute('aria-label', 'Filme anterior');

        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-btn carousel-btn-next';
        nextButton.innerHTML = '&#8250;'; // ›
        nextButton.setAttribute('aria-label', 'Próximo filme');

        // Inserir botões no DOM
        const carouselSection = document.querySelector('.carousel');
        carouselSection.appendChild(prevButton);
        carouselSection.appendChild(nextButton);

        this.prevButton = prevButton;
        this.nextButton = nextButton;
    }

    createIndicators() {
        // Criar indicadores (pontos)
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';

        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('aria-label', `Ir para filme ${i + 1}`);
            indicator.dataset.index = i;
            indicatorsContainer.appendChild(indicator);
        }

        const carouselSection = document.querySelector('.carousel');
        carouselSection.appendChild(indicatorsContainer);

        this.indicators = document.querySelectorAll('.carousel-indicator');
    }

    setupEventListeners() {
        // Navegação com botões
        this.prevButton.addEventListener('click', () => {
            this.prevItem();
        });

        this.nextButton.addEventListener('click', () => {
            this.nextItem();
        });

        // Navegação com indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToItem(index);
            });
        });

        // Pausar autoplay ao passar o mouse
        const carouselSection = document.querySelector('.carousel');
        carouselSection.addEventListener('mouseenter', () => {
            this.pauseAutoplay();
        });

        carouselSection.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevItem();
            } else if (e.key === 'ArrowRight') {
                this.nextItem();
            }
        });

        // Suporte a touch para dispositivos móveis
        this.setupTouchNavigation();
    }

    setupTouchNavigation() {
        let startX = 0;
        let endX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50; // Mínimo de pixels para considerar como swipe
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe para esquerda (próximo)
                this.nextItem();
            } else {
                // Swipe para direita (anterior)
                this.prevItem();
            }
        }
    }

    showItem(index) {
        // Atualizar index atual
        this.currentIndex = index;

        // Calcular translateX
        const translateX = -index * 100;
        this.carousel.style.transform = `translateX(${translateX}%)`;

        // Atualizar indicadores
        this.updateIndicators();

        // Atualizar visibilidade dos itens para screen readers
        this.items.forEach((item, i) => {
            if (i === index) {
                item.setAttribute('aria-hidden', 'false');
                item.style.opacity = '1';
            } else {
                item.setAttribute('aria-hidden', 'true');
                item.style.opacity = '0.7';
            }
        });
    }

    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-pressed', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.setAttribute('aria-pressed', 'false');
            }
        });
    }

    nextItem() {
        const nextIndex = (this.currentIndex + 1) % this.totalItems;
        this.goToItem(nextIndex);
    }

    prevItem() {
        const prevIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.goToItem(prevIndex);
    }

    goToItem(index) {
        this.showItem(index);
        this.restartAutoplay();
    }

    startAutoplay() {
        if (this.isPlaying && this.totalItems > 1) {
            this.autoplayInterval = setInterval(() => {
                this.nextItem();
            }, this.intervalTime);
        }
    }

    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }

    restartAutoplay() {
        this.pauseAutoplay();
        this.startAutoplay();
    }

    toggleAutoplay() {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.startAutoplay();
        } else {
            this.pauseAutoplay();
        }
    }
}

// Inicializar carousel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se estamos na página que tem carousel
    if (document.querySelector('.carousel-container')) {
        const movieCarousel = new MovieCarousel();
        
        // Expor algumas funções globalmente para debug (opcional)
        window.movieCarousel = movieCarousel;
    }
});

// Funcionalidade adicional: Auto-resize para responsividade
window.addEventListener('resize', () => {
    // Força reposicionamento do carousel em caso de mudança de tela
    if (window.movieCarousel) {
        window.movieCarousel.showItem(window.movieCarousel.currentIndex);
    }
});