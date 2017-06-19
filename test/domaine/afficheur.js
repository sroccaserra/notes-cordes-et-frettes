const {Afficheur} = require('../../domaine/afficheur')
const {Notes} = require('../../domaine/notes')

describe('L\'afficheur', () => {
    context('Les cases (lignes paires)', () => {
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

    context('Les frettes (lignes impaires)', () => {
        it('Montre la frette 0', () => {
            const afficheur = new Afficheur(Notes.MI)
            afficheur.ligne(1)
                .should.equal('=====================   ')
        })

        it('Montre la frette 1', () => {
            const afficheur = new Afficheur(Notes.MI)
            afficheur.ligne(3)
                .should.equal('---------------------   ')
        })
    })
})
