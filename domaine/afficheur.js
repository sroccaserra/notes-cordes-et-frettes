const {Textifieur} = require('./Textifieur')

function creeAfficheur(loggeur, note) {
    return function() {
        const textifieur = new Textifieur(note)
        textifieur.lignes().forEach((ligne) => {
            loggeur.log(ligne)
        })
    }
}

module.exports = {
    creeAfficheur
}
