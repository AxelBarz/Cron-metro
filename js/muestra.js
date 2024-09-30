var horas = parseInt(localStorage.getItem('hora'), 10);
var min = parseInt(localStorage.getItem('min'), 10);
var seg = parseInt(localStorage.getItem('seg'), 10);

let contar = document.getElementById('contar');
let cont = contar.getElementsByClassName('con');

let divs=0;

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

        if(divs>=cont.length){
            for(let i=0; i<cont.length; i++){
                cont[i].style.backgroundColor='rgb(244, 248, 125)';
            }
            divs=0
        } else{
            for (let i = 0; i < cont.length; i++) {
            const conta = cont[i];
            const estilo = getComputedStyle(conta);
            // Comparar el color de fondo en formato RGB
            if (estilo.backgroundColor === 'rgb(244, 248, 125)') {
                conta.style.backgroundColor = 'rgb(182, 40, 6)';
                conta.style.boxShadow = '0px 0px 10px rgb(182, 40, 6 )';
                divs++;
                break;
            }
        }

        }
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
setInterval(actualizarReloj, 1000);


