document.addEventListener("DOMContentLoaded", function () {
    const anioActual = new Date().getFullYear();
    const elementoAnio = document.getElementById("anio");
    if (elementoAnio) {
        elementoAnio.textContent = anioActual;
    }

});