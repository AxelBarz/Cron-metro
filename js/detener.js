import {actualizarReloj} from './muestra.js'

export let interval = null
let funcionamiento = true

function detenerSeguir() {
    if (funcionamiento) {
        clearInterval(interval); // Pausa el cronómetro
        funcionamiento = false;
        console.log('hola')
    } else {
        interval = setInterval(actualizarReloj, 1000); // Inicia o reanuda el cronómetro
        funcionamiento = true;
        console.log('chau')
    }
}
