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

function corde(numeroDeCorde) {
    const noteDeDepart = ACCORDAGE[NOMBRE_DE_CORDES - numeroDeCorde]

    return {
        testeLaCase: (numeroDeCase, note) => {
            const noteDeLaCase = (noteDeDepart.position + numeroDeCase) %
                NOMBRE_DE_SONS
            return noteDeLaCase === note.position
        }
    }
}

function cordes() {
    const resultat = []
    for (let i = NOMBRE_DE_CORDES; i >= 1; i--) {
        resultat.push(corde(i))
    }
    return resultat
}

module.exports = {
    corde,
    cordes
}
