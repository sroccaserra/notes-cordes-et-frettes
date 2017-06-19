const {assert, spy} = require('sinon')

const {Afficheur} = require('../../domaine/afficheur')
const {Notes} = require('../../domaine/notes')

describe('L\'afficheur', () => {
    let loggeur

    beforeEach(() => {
        loggeur = {
            log: spy()
        }
    })

    it('affiche la case 0', () => {
        // Étant donné
        const afficheur = new Afficheur(loggeur, Notes.MI)
        // Quand
        afficheur.log()
        // Alors
        assert.calledWith(loggeur.log, 'Mi                  Mi  ')
    })

    it('affiche la case 12', () => {
        // Étant donné
        const afficheur = new Afficheur(loggeur, Notes.MI)
        // Quand
        afficheur.log()
        // Alors
        assert.calledWith(loggeur.log, 'Mi  |   |   |   |   Mi  ')
    })
})
