var horas = parseInt(localStorage.getItem('hora'), 10);
var min = parseInt(localStorage.getItem('min'), 10);
var seg = parseInt(localStorage.getItem('seg'), 10);
let interval = null
let funcionamiento = true


// Validar y asignar valores por defecto si es NaN
if (isNaN(horas)) horas = 0;
if (isNaN(min)) min = 0;
if (isNaN(seg)) seg = 0;

function actualizarReloj() {
    // Incrementar los segundos
    seg++;

    // Si los segundos alcanzan 60, reiniciarlos y sumar 1 minuto
    if (seg === 60) {
        seg = 0;
        min++;
    }

    // Si los minutos alcanzan 60, reiniciarlos y sumar 1 hora
    if (min === 60) {
        min = 0;
        horas++;
    }

    // Si las horas alcanzan 24, reiniciarlas a 0
    if (horas === 24) {
        horas = 0;
    }

    // Formatear horas, minutos y segundos con ceros a la izquierda si es necesario
    let horasStr = horas < 10 ? "0" + horas : horas;
    let minStr = min < 10 ? "0" + min : min;
    let segStr = seg < 10 ? "0" + seg : seg;

    // Mostrar los valores actualizados en el HTML
    document.getElementById("Hor").innerHTML = horasStr;
    document.getElementById("Min").innerHTML = minStr;
    document.getElementById("Seg").innerHTML = segStr;

    // Guardar los valores actualizados en localStorage
    localStorage.setItem('hora', horas);
    localStorage.setItem('min', min);
    localStorage.setItem('seg', seg);
}

// Llamar a la función de actualización cada segundo
document.addEventListener("DOMContentLoaded",()=>{
    interval=setInterval(actualizarReloj, 1000)
    console.log('cronometro iniciado')
})


function agregarHoras(){
    horas=horas + 1
    let horasStr = horas < 10 ? "0" + horas : horas;
    document.getElementById("Hor").innerHTML = horasStr;
    if (min === 60) {
        min = 0;
        horas++;
    }

}

function agregarMinutos(){
    min=min + 1
    let minStr = min < 10 ? "0" + min : min;
    document.getElementById("Min").innerHTML = minStr;
    if (min === 60) {
        min = 0;
        horas++;
    }
}

function agregarSegundos(){
    seg=seg + 10
    let segStr = seg < 10 ? "0" + seg : seg;
    document.getElementById("Seg").innerHTML = segStr;
    if (seg === 60) {
        seg = 0;
        min++;
    }
}

function detenerSeguir() {
    const img = document.querySelector('img')
    if (funcionamiento) {
        clearInterval(interval); // Pausa el cronómetro
        funcionamiento = false;
        img.src='../img/reanudar.png'
        
    } else {
        interval = setInterval(actualizarReloj, 1000); // Inicia o reanuda el cronómetro
        funcionamiento = true;
        img.src='../img/pausa.png'
    }
}




let wakeLock=null;

async function activarWakeLock(){
    try{
        wakeLock=await navigator.wakeLock.request('screen');
        console.log('Wake Lock activado');
    }catch(err){
        console.error(`${err.name}, ${err.messaje}`);
    }
}

function desactivarWakeLock(){
    if(wakeLock !== null){
        wakeLock.release()
        .then(()=>{
            wakeLock=null;
            console.log('Wake Lock desactivado');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    activarWakeLock();
});

document.addEventListener('visibilitychange', () => {
    if (wakeLock !== null && document.visibilityState === 'hidden'){
        desactivarWakeLock();
    }
})


