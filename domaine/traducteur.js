const {Notes} = require('./notes')

function traduit(nomDeNote) {
    for (let note of Object.values(Notes)) {
        if (nomDeNote === note.nom) {
            return note
        }
    }
}

module.exports = {
    traduit
}
