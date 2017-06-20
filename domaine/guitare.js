const {Notes} = require('./notes')

const NOMBRE_DE_SONS = 12

const ACCORDAGE = [
    Notes.MI,
    Notes.LA,
    Notes.RE,
    Notes.SOL,
    Notes.SI,
    Notes.MI
]

const NOMBRE_DE_CORDES = ACCORDAGE.length

function testeLaCase(numeroDeCorde, numeroDeCase, note) {
    const indexDeLaNoteAVide =
        ACCORDAGE[NOMBRE_DE_CORDES - numeroDeCorde].index

    const indexDeLaNoteDeLaCase =
        (indexDeLaNoteAVide + numeroDeCase) % NOMBRE_DE_SONS

    return indexDeLaNoteDeLaCase === note.index
}

function corde(numeroDeCorde) {
    return {
        testeLaCase: testeLaCase.bind(null, numeroDeCorde)
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
