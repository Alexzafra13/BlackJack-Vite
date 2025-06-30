// Importación para usar el método shuffle
import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposCartaEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} Devuelve el Deck creado
 */
export const crearDeck = (tiposDeCarta, tiposCartaEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) {
        throw new Error('Tipos de cartas es obligatorio como arreglo de String');
    }
    if (!tiposCartaEspeciales || tiposCartaEspeciales.length === 0) {
        throw new Error('Tipos de cartas especiales es obligatorio como arreglo de String');
    }

    let nuevoDeck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            nuevoDeck.push(i + tipo);
        }
    }
    
    for (let esp of tiposCartaEspeciales) {
        for (let tipo of tiposDeCarta) {
            nuevoDeck.push(esp + tipo);
        }
    }
    
    return _.shuffle(nuevoDeck);
};
