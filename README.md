# Expo13a14

### Création du projet

npx create-expo-app --template

Plusieurs choix sont possible : avec ou sans typescript, avec ou sans expo-router

Pour ce projet d'exemple on va prendre Blank (TypeScript)

Puis supprimer le fichier package-lock.json et faire un yarn à la racine

### Générer le code natif

yarn expo prebuild

La 1ère fois, il va demander le nom de package qu'on veut donner pour Android ainsi que le bundle identifier pour iOS.
Ces infos pourront être modifiés ultèrieument dans le fichier app.config.ts ou app.json

##### Attention

Ne pas utiliser le registry cardiweb (https://registry.cardiweb.com/repository/npm-interne/) mais un registry public (comme https://registry.npmjs.org/) sinon le yarn expo prebuild ne fonctionne pas (demander à Mike la raison)


### Créer un gitignore

Créer un fichier .gitignore à la racine et y mettre ce que l'on ne veut pas commiter (comme les dossiers android, ios, les node_modules, le dossier expo, ...)