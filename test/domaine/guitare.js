const {Guitare} = require('../../domaine/guitare')
const {Notes} = require('../../domaine/notes')

describe('La première corde', () => {
    let cordeMiAigue

    beforeEach(() => {
        const guitare = new Guitare()
        cordeMiAigue = guitare.corde(1)
    })

    it('commence par Mi', () => {
        cordeMiAigue.testeLaCase(0, Notes.MI)
            .should.be.true
    })

    it('n\'est pas Mi à la case 1', () => {
        cordeMiAigue.testeLaCase(1, Notes.MI)
            .should.be.false
    })

    it('finit par Mi', () => {
        cordeMiAigue.testeLaCase(12, Notes.MI)
            .should.be.true
    })

    it('n\'est pas Fa à la case 0', () => {
        cordeMiAigue.testeLaCase(0, Notes.FA)
            .should.be.false
    })

    it('est Fa à la case 1', () => {
        cordeMiAigue.testeLaCase(1, Notes.FA)
            .should.be.true
    })

    it('est Fa à la case 13', () => {
        cordeMiAigue.testeLaCase(13, Notes.FA)
            .should.be.true
    })
})

describe('La deuxième corde', () => {
    let cordeSi

    beforeEach(() => {
        const guitare = new Guitare()
        cordeSi = guitare.corde(2)
    })

    it('commence par Si', () => {
        cordeSi.testeLaCase(0, Notes.SI)
            .should.be.true
    })

    it('continue par Do', () => {
        cordeSi.testeLaCase(1, Notes.DO)
            .should.be.true
    })
})
