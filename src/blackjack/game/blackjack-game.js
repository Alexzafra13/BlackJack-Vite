import { crearDeck, pedirCarta } from '../usecases';
import { acumularPuntos } from '../helpers';
import { crearCarta, actualizarPuntosUI, limpiarUI } from '../helpers';
import { turnoMaquina } from './turno-maquina';

export class BlackjackGame {
    constructor() {
        this.deck = [];
        this.puntosJugadores = [];
        this.tiposCarta = ["C", "D", "H", "S"];
        this.tiposCartaEspeciales = ["A", "J", "Q", "K"];
        
        // Referencias HTML
        this.btnPedir = document.querySelector("#btnPedir");
        this.btnPlantarse = document.querySelector("#btnDetener");
        this.btnNuevoJuego = document.querySelector("#btnNuevo");
        this.puntosHTML = document.querySelectorAll(".puntos");
        this.divCartasJugadores = document.querySelectorAll(".divCartas");
        
        this.inicializarEventos();
    }

    iniciarJuego(numJugadores = 2) {
        this.deck = crearDeck(this.tiposCarta, this.tiposCartaEspeciales);
        this.puntosJugadores = new Array(numJugadores).fill(0);
        
        limpiarUI(this.puntosHTML, this.divCartasJugadores);
        
        this.btnPedir.disabled = false;
        this.btnPlantarse.disabled = false;
    }

    pedirCartaJugador() {
        const carta = pedirCarta(this.deck);
        const puntosJugador = acumularPuntos(carta, 0, this.puntosJugadores);
        actualizarPuntosUI(puntosJugador, 0, this.puntosHTML);
        crearCarta(carta, 0, this.divCartasJugadores);

        if (puntosJugador > 21 || puntosJugador === 21) {
            this.terminarTurnoJugador();
        }
    }

    plantarseJugador() {
        this.terminarTurnoJugador();
    }

    terminarTurnoJugador() {
        this.btnPedir.disabled = true;
        this.btnPlantarse.disabled = true;
        turnoMaquina(
            this.puntosJugadores[0], 
            this.deck, 
            this.puntosJugadores, 
            this.puntosHTML, 
            this.divCartasJugadores
        );
    }

    inicializarEventos() {
        this.btnPedir.addEventListener("click", () => {
            this.pedirCartaJugador();
        });

        this.btnPlantarse.addEventListener("click", () => {
            this.plantarseJugador();
        });

        this.btnNuevoJuego.addEventListener("click", () => {
            this.iniciarJuego();
        });
    }
}