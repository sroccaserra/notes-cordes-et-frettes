const {Notes} = require('./notes')

const NOMBRE_DE_SONS = 12
const NOMBRE_DE_CORDES = 6

const ACCORDAGE = [
    Notes.MI,
    Notes.LA,
    Notes.RE,
    Notes.SOL,
    Notes.SI,
    Notes.MI
]

class Guitare {
    corde(numeroDeCorde) {
        const noteDeDepart = ACCORDAGE[NOMBRE_DE_CORDES - numeroDeCorde]

        return {
            testeLaCase: (numeroDeCase, note) => {
                const noteDeLaCase = (noteDeDepart.position + numeroDeCase)
                    % NOMBRE_DE_SONS
                return noteDeLaCase === note.position
            }
        }
    }
}

module.exports = {
    Guitare
}
