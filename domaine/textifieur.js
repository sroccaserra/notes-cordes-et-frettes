const {Guitare} = require('./guitare')

const FRETTE_ZERO = '=====================   '
const FRETTE = '---------------------   '
const CORDE_A_VIDE = '    '
const CASE_VIDE = '|   '
const NOMBRE_DE_LIGNES = 25

class Textifieur {
    constructor(noteAAfficher) {
        this.note = noteAAfficher
    }

    ligne(numeroDeLigne) {
        if (numeroDeLigne === 1) {
            return FRETTE_ZERO
        }

        if (numeroDeLigne % 2 === 1) {
            return FRETTE
        }

        const numeroDeCase = numeroDeLigne / 2
        return this.cases(numeroDeCase)
    }

    cases(numeroDeCase) {
        const caseAvecNote = ajusteAvecEspaces(this.note.nom)
        const caseVide = numeroDeCase === 0 ? CORDE_A_VIDE : CASE_VIDE

        const cordes = Guitare.cordes()
        const cases = cordes.map(corde => {
            if (corde.testeLaCase(numeroDeCase, this.note)) {
                return caseAvecNote
            }
            return caseVide
        })

        return cases.join('')
    }

    lignes() {
        const resultat = []
        for (let i = 0; i <= NOMBRE_DE_LIGNES; ++i) {
            resultat.push(this.ligne(i))
        }
        return resultat
    }
}

function ajusteAvecEspaces(nomDeNote) {
    return nomDeNote + '  '.slice(nomDeNote.length - 2)
}

module.exports = {
    Textifieur,
    ajusteAvecEspaces
}

