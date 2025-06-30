/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Devuelve una carta del deck
 */
export const pedirCarta = ( deck ) => {
    if (!deck || deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    return deck.pop();
};