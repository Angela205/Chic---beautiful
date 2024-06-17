document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');

    window.addEventListener('scroll', () => {
        // Obtener la posición del desplazamiento
        const scrollPosition = window.scrollY;
        
        // Mover el video hacia arriba a medida que el usuario se desplaza hacia abajo
        video.style.transform = `translateY(-${scrollPosition * 0.5}px)`; // Ajusta la velocidad del desplazamiento si es necesario
    });
});
