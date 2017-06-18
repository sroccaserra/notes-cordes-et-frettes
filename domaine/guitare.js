const {Notes} = require('./notes')

const NOMBRE_DE_SONS = 12

class Guitare {
    corde() {
        return {
            testeLaCase: (numeroDeCase, note) => {
                return numeroDeCase % NOMBRE_DE_SONS === note.position
            }
        } 
    }
}

module.exports = {
    Guitare
}
