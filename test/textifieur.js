const {Textifieur, ajusteAvecEspaces} = require('../domaine/textifieur')
const {Notes} = require('../domaine/notes')

describe('Le Textifieur', () => {
    context('Les cases (lignes paires)', () => {
        it('Montre Mi en ligne 0', () => {
            const textifieurPourMi = new Textifieur(Notes.MI)
            textifieurPourMi.ligne(0)
                .should.equal('Mi                  Mi  ')
        })

        it('Montre Mi (donc des cases vides) en ligne 2', () => {
            const textifieurPourMi = new Textifieur(Notes.MI)
            textifieurPourMi.ligne(2)
                .should.equal('|   |   |   |   |   |   ')
        })

        it('Montre Fa en ligne 2', () => {
            const textifieurPourFa = new Textifieur(Notes.FA)
            textifieurPourFa.ligne(2)
                .should.equal('Fa  |   |   |   |   Fa  ')
        })

        it('Montre Fa♯ en ligne 4', () => {
            const textifieurPourFAd = new Textifieur(Notes.FAd)
            textifieurPourFAd.ligne(4)
                .should.equal('Fa♯ |   |   |   |   Fa♯ ')
        })
    })

    context('Les frettes (lignes impaires)', () => {
        it('Montre la frette 0', () => {
            const textifieurPourMi = new Textifieur(Notes.MI)
            textifieurPourMi.ligne(1)
                .should.equal('=====================   ')
        })

        it('Montre la frette 1', () => {
            const textifieurPourMi = new Textifieur(Notes.MI)
            textifieurPourMi.ligne(3)
                .should.equal('---------------------   ')
        })
    })

    context('Les lignes', () => {
        it('montrent tout le manche', () => {
            const textifieurPourMi = new Textifieur(Notes.MI)
            textifieurPourMi.lignes()
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

describe('L\'ajustement', () => {
    it('ajoute deux espaces pour Mi', () => {
        ajusteAvecEspaces('Mi')
            .should.equal('Mi  ')
    })

    it('ajoute un espace pour Sol', () => {
        ajusteAvecEspaces('Sol')
            .should.equal('Sol ')
    })

    it('n\'ajoute pas d\'espace pour Sol♯', () => {
        ajusteAvecEspaces('Sol♯')
            .should.equal('Sol♯')
    })
})
