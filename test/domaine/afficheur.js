const {Afficheur} = require('../../domaine/afficheur')
const {Notes} = require('../../domaine/notes')

describe('L\'afficheur', () => {
    it('Montre Mi en ligne 0', () => {
        const afficheur = new Afficheur(Notes.MI)
        afficheur.ligne(0)
            .should.equal('Mi                  Mi  ')
    })

    it('Montre Mi (donc des cases vides) en ligne 2', () => {
        const afficheur = new Afficheur(Notes.MI)
        afficheur.ligne(2)
            .should.equal('|   |   |   |   |   |   ')
    })

    it('Montre Fa en ligne 2', () => {
        const afficheur = new Afficheur(Notes.FA)
        afficheur.ligne(2)
            .should.equal('Fa  |   |   |   |   Fa  ')
    })
})
