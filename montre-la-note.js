const {creeAfficheur} = require('./domaine/afficheur')
const {traduit} = require('./domaine/traducteur')

const nomDeNote = process.argv[2]
const note = traduit(nomDeNote)

if (!note) {
    console.log(`Note ${nomDeNote} non trouvée.`)
    process.exit(1)
}

creeAfficheur(console, note)()
