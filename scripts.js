document.addEventListener("DOMContentLoaded", function() {
    // Cargar el contenido del portfolio
    fetch('portfolio.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('portfolio-container').innerHTML = data;

            // Después de cargar el contenido, agregar los eventos de filtro
            const filterButtons = document.querySelectorAll(".filter-btn");
            const galleryItems = document.querySelectorAll(".gallery-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const category = button.getAttribute("data-category");

                    // Ocultar todas las imágenes
                    galleryItems.forEach(item => {
                        item.classList.add("fade-out");
                        item.classList.remove("show");
                        item.classList.add("hidden");
                    });

                    // Reorganizar y mostrar solo las que coinciden después de la transición
                    setTimeout(() => {
                        galleryItems.forEach(item => {
                            if (category === "all" || item.classList.contains(category)) {
                                item.classList.remove("hidden");
                                setTimeout(() => {
                                    item.classList.remove("fade-out");
                                    item.classList.add("show");
                                }, 50); // Breve retraso para que se vea la transición de entrada
                            }
                        });
                    }, 300); // Tiempo de la transición de salida
                });
            });
        })
        .catch(error => console.error('Error al cargar el portfolio:', error));
});

var typed = new Typed('.typed', {
    strings: ["Graphic Designer", "2D Animator", "3D Animator", "Video Editor", "Illustrator", "Digital Artist", "Content Creator",],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
