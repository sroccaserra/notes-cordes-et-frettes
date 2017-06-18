const {Notes} = require('./notes')

const NOMBRE_DE_SONS = 12

const accordage = [Notes.MI, Notes.SI]

class Guitare {
    corde(numeroDeCorde) {
        const noteDeDepart = accordage[numeroDeCorde - 1]

        return {
            testeLaCase: (numeroDeCase, note) => {
                return (noteDeDepart.position + numeroDeCase) % NOMBRE_DE_SONS === note.position
            }
        }
    }
}

module.exports = {
    Guitare
}
