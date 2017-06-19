const {Afficheur} = require('./domaine/afficheur')
const {traduit} = require('./domaine/traducteur')

function main() {
    const nomDeNote = process.argv[2]
    const note = traduit(nomDeNote)

    if (!note) {
        console.log(`Note ${nomDeNote} non trouvée.`)
        process.exit(1)
    }

    const afficheur = new Afficheur(console, note)
    afficheur.log()
}

if (require.main === module) {
    main();
}

