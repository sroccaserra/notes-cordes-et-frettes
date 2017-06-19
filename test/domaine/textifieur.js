const {Textifieur} = require('../../domaine/textifieur')
const {Notes} = require('../../domaine/notes')

describe('Le Textifieur', () => {
    context('Les cases (lignes paires)', () => {
        it('Montre Mi en ligne 0', () => {
            const textifieur = new Textifieur(Notes.MI)
            textifieur.ligne(0)
                .should.equal('Mi                  Mi  ')
        })

        it('Montre Mi (donc des cases vides) en ligne 2', () => {
            const textifieur = new Textifieur(Notes.MI)
            textifieur.ligne(2)
                .should.equal('|   |   |   |   |   |   ')
        })

        it('Montre Fa en ligne 2', () => {
            const textifieur = new Textifieur(Notes.FA)
            textifieur.ligne(2)
                .should.equal('Fa  |   |   |   |   Fa  ')
        })
    })

    context('Les frettes (lignes impaires)', () => {
        it('Montre la frette 0', () => {
            const textifieur = new Textifieur(Notes.MI)
            textifieur.ligne(1)
                .should.equal('=====================   ')
        })

        it('Montre la frette 1', () => {
            const textifieur = new Textifieur(Notes.MI)
            textifieur.ligne(3)
                .should.equal('---------------------   ')
        })
    })

    context('Les lignes', () => {
        it('montrent tout le manche', () => {
            const textifieur = new Textifieur(Notes.MI)
            textifieur.lignes()
                .should.deep.equal([
                    'Mi                  Mi  ',
                    '=====================   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   |   Mi  |   |   |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   |   |   |   Mi  |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   Mi  |   |   |   |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   |   |   Mi  |   |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    '|   |   |   |   |   |   ',
                    '---------------------   ',
                    'Mi  |   |   |   |   Mi  ',
                    '---------------------   '
                ])
        })
    })
})
