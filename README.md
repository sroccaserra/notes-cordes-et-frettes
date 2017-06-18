

Exercice : créer un outil en ligne de commande pour apprendre le nom des notes
sur un manche de guitare en les visualisant.


```bash
$ node montre-la-note.js Mi

Mi                  Mi
=====================
|   |   |   |   |   |
---------------------
|   |   Mi  |   |   |
---------------------
|   |   |   |   |   |
---------------------
|   |   |   |   |   |
---------------------
|   |   |   |   Mi  |
---------------------
|   |   |   |   |   |
---------------------
|   Mi  |   |   |   |
---------------------
|   |   |   |   |   |
---------------------
|   |   |   Mi  |   |
---------------------
|   |   |   |   |   |
---------------------
|   |   |   |   |   |
---------------------
Mi  |   |   |   |   Mi
---------------------
```


Utiliser le vocabulaire que j'utilise naturellement pour communiquer à l'oral,
et le respecter dans tout le code (plus important qu'éviter le franglais).


## Specs

### Conventions métier

#### Musique

"Monter" veut dire aller vers une note plus aiguë.

"Descendre" veut dire aller vers une note plus basse.

Les noms des 12 **notes**, en montant du grave vers l'aiguë :
- Do
- Do♯ = Ré♭
- Ré
- Ré♯ = Mi♭
- Mi
- Fa
- Fa♯ = Sol♭
- Sol
- Sol♯ = La♭
- La
- La♯ = Si♭
- Si

Ensuite on reboucle sur Do et ainsi de suite en continuant à monter vers les
aiguës.


#### Sur une guitare

Une guitare a 6 **cordes**, du plus grave au plus aiguë :
- Mi grave
- La
- Ré
- Sol
- Si
- Mi aiguë

Dans les notations standard, la corde Mi aiguë est numérotée 1, et ainsi de
suite jusqu'à la corde de Mi grave qui est numérotée 6.

Les **cases** sont les endroit où les doigts appuient pour changer la note.

Les **frettes** sont les barrettes métalliques qui séparent les cases.

## Lancer les tests

Exemple avec un watcher :

    $ npm t -- --bail --reporter=min --watch

## Feedback

Partir en colonne car c'est plus logique pour comprendre, mais ensuite on veut
afficher par ligne : il faut alors s'adapter.

Avec une basse : moins de temps à compter ?

