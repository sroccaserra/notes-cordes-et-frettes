const {assert, spy} = require('sinon')

const {Afficheur} = require('../domaine/afficheur')
const {Notes} = require('../domaine/notes')

describe('L\'afficheur', () => {
    let loggeur
    let afficheur

    beforeEach(() => {
        loggeur = {
            log: spy()
        }
        afficheur = new Afficheur(loggeur, Notes.MI)
    })

    it('affiche la case 0', () => {
        // Quand
        afficheur.log()
        // Alors
        assert.calledWith(loggeur.log, 'Mi                  Mi  ')
    })

    it('affiche la case 12', () => {
        // Quand
        afficheur.log()
        // Alors
        assert.calledWith(loggeur.log, 'Mi  |   |   |   |   Mi  ')
    })
})
