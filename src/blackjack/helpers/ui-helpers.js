
/**
 * Crear elemento visual de carta
 * @param {String} carta 
 * @param {Number} turno 
 * @param {NodeList} divCartasJugadores 
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    const imgCarta = document.createElement( "img" );
    imgCarta.src = `./assets/cartas/${ carta }.png`;
    imgCarta.classList.add( "carta" );
    divCartasJugadores[ turno ].append( imgCarta );
};

/**
 * Actualizar puntos en pantalla
 * @param {Number} puntos 
 * @param {Number} turno 
 * @param {NodeList} puntosHTML 
 */
export const actualizarPuntosUI = (puntos, turno, puntosHTML) => {
    puntosHTML[turno].innerText = puntos;
};

/**
 * Mostrar mensaje final del juego
 * @param {String} mensaje 
 */
export const mostrarMensaje = (mensaje) => {
    const mensajeDiv = document.querySelector("#mensaje-final");
    const textoMensaje = document.querySelector("#texto-mensaje");
    textoMensaje.innerText = mensaje;
    mensajeDiv.classList.remove("oculto");
};

/**
 * Limpiar interfaz para nuevo juego
 * @param {NodeList} puntosHTML 
 * @param {NodeList} divCartasJugadores 
 */
export const limpiarUI = (puntosHTML, divCartasJugadores) => {
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
    document.querySelector("#mensaje-final").classList.add("oculto");
};