import { pedirCarta } from '../usecases';
import { acumularPuntos, determinarGanador } from '../helpers';
import { crearCarta, actualizarPuntosUI, mostrarMensaje } from '../helpers';

/**
 * Ejecutar turno de la máquina
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeList} puntosHTML 
 * @param {NodeList} divCartasJugadores 
 */
export const turnoMaquina = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosMaquina = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosMaquina = acumularPuntos(carta, 1, puntosJugadores);
        actualizarPuntosUI(puntosMaquina, 1, puntosHTML);
        crearCarta(carta, 1, divCartasJugadores);

        if (puntosMinimos > 21) break;
    } while (puntosMaquina < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        const mensaje = determinarGanador(puntosJugadores[0], puntosMaquina);
        mostrarMensaje(mensaje);
    }, 500);
};