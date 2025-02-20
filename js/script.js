document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido");
    
    // Animación del logo al cargar la página
    const logo = document.querySelector(".logo");
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.8)";
    setTimeout(() => {
        logo.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
    }, 500);

    // Efecto hover en las portadas
    const portadas = document.querySelectorAll(".portada");
    portadas.forEach(portada => {
        portada.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        portada.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
