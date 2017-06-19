const {Textifieur} = require('./Textifieur')

class Afficheur {
    constructor(loggeur, note) {
        this.loggeur = loggeur
        this.note = note
    }

    log() {
        const textifieur = new Textifieur(this.note)
        textifieur.lignes().forEach((ligne) => {
            this.loggeur.log(ligne)
        })
    }
}

module.exports = {
    Afficheur
}
