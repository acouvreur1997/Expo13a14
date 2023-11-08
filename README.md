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


### Créer un gitignore

Créer un fichier .gitignore à la racine et y mettre ce que l'on ne veut pas commiter (comme les dossiers android, ios, les node_modules, le dossier expo, ...)

### Builder en local

Avant de commencer à dev, on va vérifier que le projet compile bien en local avec les dossiers android et ios générés par la commande prebuild.
Lancer un yarn start dans un terminal à la racine du projet

Pour Android, aller dans le dossier android et faire un ./gradlew installDebug

Pour iOS, ouvrir le dossier ios sur Xcode, chosir un simulateur (ou un vrai device si vous avez une development team) et builder

### Passer le fichier app.json en app.config.ts

app.json étant un fichier statique, si on veut par exemple que le nom de l'app varie selon l'environnement, on va devoir passer le fichier en app.config.ts pour que cela devienne un fichier dynamique

### Créer différents environnements

On va modifier le fichier app.config.ts pour déclarer un objet avec les variables qui changent selon l'environnement.
Ensuite on refait un yarn expo prebuild en précisant l'environnement désiré dans la commande :
ENV=release yarn expo prebuild

Ou alors on crée un fichier .env et on précise l'environnement désiré (ENV=release) dedans et lorsque on fera un yarn expo prebuild, les valeurs présentes dans le fichier .env seront chargées.

### Avoir une appIcone pour chaque env

Soit on crée toutes les app icônes nous-mêmes et on les met dans le dossier assets et dans le fichier app.config.ts, selon l'environnement on dit à expo de prendre l'app icone correspondante.

Soit on peut utiliser la lib app-icon-badge (https://www.npmjs.com/package/app-icon-badge?activeTab=readme) qui permet de gérer automatiquement l'affichage de bandeaux et on a juste à mettre 1 icone et 1 adaptative icon dans le dossier assets

### SplashScreen

TODO

### Ajouter des fonts custom

TODO

### Créer un plugin

TODO

### Quelques libs expo

TODO

### Générer l'apk / l'ipa

TODO