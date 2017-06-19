const {traduit} = require('../../domaine/traducteur')
const {Notes} = require('../../domaine/notes')

describe('Le traducteur', () => {
    it('Renvoie la note MI pour la chaine "Mi"', () => {
        traduit('Mi')
            .should.equal(Notes.MI)
    })

    it('Renvoie la note FA pour la chaine "Fa"', () => {
        traduit('Fa')
            .should.equal(Notes.FA)
    })

    it('Renvoie la note FAd pour la chaine "Fa♯"', () => {
        traduit('Fa♯')
            .should.equal(Notes.FAd)
    })
})
