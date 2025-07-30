       let slideIndex = 0; // Se inicia en 0 para indexar el array correctamente
        const slides = document.querySelectorAll(".carousel-slide");
        const track = document.querySelector(".carousel-track");
        const numSlides = slides.length;
        const slideTotalWidth = slides[0].offsetWidth + (parseFloat(getComputedStyle(slides[0]).marginRight) * 2);

        function plusSlides(n) {
            slideIndex = (slideIndex + n + numSlides) % numSlides;
            showSlides();
        }

        function showSlides() {
            const containerWidth = track.parentElement.offsetWidth;
            const targetTranslateX = -(slideIndex * slideTotalWidth) + (containerWidth / 2) - (slideTotalWidth / 2);

            track.style.transform = 'translateX(' + targetTranslateX + 'px)';

            slides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        // Inicializa el carrusel en la carga de la página
        window.onload = function() {
            // Envuelve las slides en un track si no existe (para compatibilidad con el código original)
            if (!track) {
                const container = document.querySelector('.carousel-container');
                const tempTrack = document.createElement('div');
                tempTrack.classList.add('carousel-track');
                while (container.firstChild) {
                    tempTrack.appendChild(container.firstChild);
                }
                container.appendChild(tempTrack);
                // Reasignar track y slides si fueron reestructurados
                track = document.querySelector(".carousel-track");
                slides = document.querySelectorAll(".carousel-slide");
            }
            showSlides();
        };

        function toggleSurprise() {
            const surpriseContent = document.getElementById('surpriseContent');
            const songLink = "https://link.deezer.com/s/30zSI65ZFh8oRMMePZFCW";

            if (surpriseContent.style.display === 'none' || surpriseContent.style.display === '') {
                surpriseContent.style.display = 'block';
                window.open(songLink, '_blank');
            } else {
                surpriseContent.style.display = 'none';
            }
        }

        