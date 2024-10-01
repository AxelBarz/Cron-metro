function mostrarReloj() {
    // Obtener los valores de los inputs
    let horas = parseInt(document.getElementById("hora").value, 10);
    let min = parseInt(document.getElementById("minutos").value, 10);
    let seg = parseInt(document.getElementById("segundos").value, 10);

    localStorage.setItem('hora', horas);
    localStorage.setItem('min', min);
    localStorage.setItem('seg', seg);

    window.location.href='muestra.html'
}
