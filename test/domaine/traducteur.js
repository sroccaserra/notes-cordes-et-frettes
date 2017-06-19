const {traduit} = require('../../domaine/traducteur')
const {Notes} = require('../../domaine/notes')

describe('Le traducteur', () => {
    it('Renvoie la note MI pour la chaine "Mi"', () => {
        const note = traduit('Mi')
        note.should.equal(Notes.MI)
    })

    it('Renvoie la note FA pour la chaine "Fa"', () => {
        const note = traduit('Fa')
        note.should.equal(Notes.FA)
    })

    it('Renvoie la note FAd pour la chaine "Fa♯"', () => {
        const note = traduit('Fa♯')
        note.should.equal(Notes.FAd)
    })
})
