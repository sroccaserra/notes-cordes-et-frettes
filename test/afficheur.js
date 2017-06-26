const {assert, spy} = require('sinon')

const {creeAfficheur} = require('../domaine/afficheur')
const {Notes} = require('../domaine/notes')

describe('L\'afficheur', () => {
    let loggeur
    let afficheLaNoteMi

    beforeEach(() => {
        loggeur = {
            log: spy()
        }
        afficheLaNoteMi = creeAfficheur(loggeur, Notes.MI)
    })

    it('affiche la case 0', () => {
        // Quand
        afficheLaNoteMi()
        // Alors
        assert.calledWith(loggeur.log, 'Mi                  Mi  ')
    })

    it('affiche la case 12', () => {
        // Quand
        afficheLaNoteMi()
        // Alors
        assert.calledWith(loggeur.log, 'Mi  |   |   |   |   Mi  ')
    })
})
