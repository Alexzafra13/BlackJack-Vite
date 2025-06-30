import '../style.css';
import { BlackjackGame } from './game/blackjack-game';

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const juego = new BlackjackGame();
    juego.iniciarJuego();
});