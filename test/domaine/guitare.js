const {Guitare} = require('../../domaine/guitare')
const {Notes} = require('../../domaine/notes')

describe('La première corde', () => {
    let cordeDeMiAigue

    beforeEach(() => {
        const guitare = new Guitare()
        cordeDeMiAigue = guitare.corde(1)
    })

    it('commence par Mi', () => {
        cordeDeMiAigue.testeLaCase(0, Notes.MI)
            .should.be.true
    })

    it('n\'est pas Mi à la case 1', () => {
        cordeDeMiAigue.testeLaCase(1, Notes.MI)
            .should.be.false
    })

    it('finit par Mi', () => {
        cordeDeMiAigue.testeLaCase(12, Notes.MI)
            .should.be.true
    })

    it('n\'est pas Fa à la case 0', () => {
        cordeDeMiAigue.testeLaCase(0, Notes.FA)
            .should.be.false
    })

    it('est Fa à la case 1', () => {
        cordeDeMiAigue.testeLaCase(1, Notes.FA)
            .should.be.true
    })

    it('est Fa à la case 13', () => {
        cordeDeMiAigue.testeLaCase(13, Notes.FA)
            .should.be.true
    })
})

describe('La deuxième corde', () => {
    let cordeDeSi

    beforeEach(() => {
        const guitare = new Guitare()
        cordeDeSi = guitare.corde(2)
    })

    it('commence par Si', () => {
        cordeDeSi.testeLaCase(0, Notes.SI)
            .should.be.true
    })

    it('continue par Do', () => {
        cordeDeSi.testeLaCase(1, Notes.DO)
            .should.be.true
    })
})

describe('Les cordes suivantes sont :', () => {
    let guitare

    beforeEach(() => {
        guitare = new Guitare()
    })

    it('Sol', () => {
        const cordeDeSol = guitare.corde(3)
        cordeDeSol.testeLaCase(0, Notes.SOL)
            .should.be.true
    })

    it('Ré', () => {
        const cordeDeRe = guitare.corde(4)
        cordeDeRe.testeLaCase(0, Notes.RE)
            .should.be.true
    })

    it('La', () => {
        const cordeDeLa = guitare.corde(5)
        cordeDeLa.testeLaCase(0, Notes.LA)
            .should.be.true
    })

    it('Mi', () => {
        const cordeDeMiGrave = guitare.corde(6)
        cordeDeMiGrave.testeLaCase(0, Notes.MI)
            .should.be.true
    })
})
