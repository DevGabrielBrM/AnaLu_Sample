// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica do Navbar com Scroll
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Lógica de Scroll Suave
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            const targetId = link.hash;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. LÓGICA DO SLIDER DE VÍDEOS (NOVO)
    const slider = document.getElementById("video-slider");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    if (slider) { // Verifica se o slider existe na página
        
        scrollRightBtn.addEventListener("click", () => {
            // Pega a largura do primeiro card de vídeo
            const cardWidth = slider.querySelector('.video-card').offsetWidth;
            // Pega o 'gap' (espaçamento) entre os cards
            const gap = parseInt(window.getComputedStyle(slider).gap, 10);
            
            // Rola o slider para a direita (o 'scroll-snap' vai travar no próximo item)
            slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        });

        scrollLeftBtn.addEventListener("click", () => {
            // Pega a largura do primeiro card de vídeo
            const cardWidth = slider.querySelector('.video-card').offsetWidth;
            // Pega o 'gap' (espaçamento) entre os cards
            const gap = parseInt(window.getComputedStyle(slider).gap, 10);

            // Rola o slider para a esquerda
            slider.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
        });
    }

});