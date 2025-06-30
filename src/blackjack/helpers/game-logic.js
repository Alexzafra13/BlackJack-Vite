import { valorCarta } from '../usecases';

/**
 * Acumular puntos del jugador
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @returns {Number} Puntos actuales del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores) => {
    puntosJugadores[turno] += valorCarta(carta);
    return puntosJugadores[turno];
};

/**
 * Determinar el ganador del juego
 * @param {Number} puntosJugador 
 * @param {Number} puntosMaquina 
 * @returns {String} Mensaje del resultado
 */
export const determinarGanador = (puntosJugador, puntosMaquina) => {
    if (puntosJugador > 21) {
        return "¡Perdiste! 😞";
    } else if (puntosMaquina > 21) {
        return "¡Ganaste! 🎉";
    } else if (puntosJugador === puntosMaquina) {
        return "¡Empate! 🤝";
    } else if (puntosJugador > puntosMaquina) {
        return "¡Ganaste! 🎉";
    } else {
        return "¡Perdiste! 😞";
    }
};