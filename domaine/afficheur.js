const {Guitare} = require('./guitare')

class Afficheur {
    constructor(noteAAfficher) {
        this.note = noteAAfficher
    }

    ligne(numeroDeLigne) {
        const caseAvecNote = this.note.nom + '  '
        const caseVide = numeroDeLigne === 0 ? '    ' : '|   '
        const numeroDeCase = numeroDeLigne / 2

        const cordes = new Guitare().cordes()
        const cases = cordes.map(corde => {
            if (corde.testeLaCase(numeroDeCase, this.note)) {
                return caseAvecNote
            }
            return caseVide
        })

        return cases.join('')
    }
}

module.exports = {
    Afficheur
}

