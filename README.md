# marcelle-mobi
![marcelle-mobi](static/icon.png)
> Déplacez-vous autrement dans Marseille

## SETUP

1. Installer ou upgrader vers NodeJS 10 https://nodejs.org/fr/download/

**Mac OS (avec homebrew)**
```
brew install node
**OR**
brew update
brew upgrade node
```

**Linux (avec apt)**
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```

2. Installer Yarn (gestionnaire de packages) https://yarnpkg.com/en/docs/install

**Mac OS**
```
brew install yarn
```

**Linux**
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

Un éditeur de code : https://code.visualstudio.com/

### OPTION 1 : Travailler dans l'application existante

#### En VueJS [exemple pour ajouter une page dans l'app](exemples/page.vue)
#### VueJS+JSX [exemple en JSX](exemples/jsx.vue)
#### HTML+CSS+JS [exemple Vanilla](exemples/vanilla.vue)


1. Forker le repo [Aide](https://help.github.com/en/articles/fork-a-repo)
2. Cloner votre repo

**Cloner votre repo**
```
git clone git@github.com:VOTRE_USERNAME_GITHUB/marcelle-mobi.git
cd marcelle-mobi
yarn install
```
Ajouter un fichier nommé `.env` à la racine du dossier de votre application, qui contient :
```
CODE4MARSEILLE_API_KEY=LE_TOKEN_QUI_VOUS EST_DONNÉ_LE_JOUR_DU_HACKATHON
```

Lancer le serveur en local sur http://localhost:3000
```
yarn dev
```

3. Créer une branche `git checkout -b ma-super-feature`
4. A la fin du Hackathon : pousser votre branche sur Github et faire une Pull Request vers ce repo `KevinBerthier/marcelle-mobi`

### OPTION 2 : Créer votre propre projet

1. Créer un projet avec le langage de votre choix
2. Créer un repo Github [Aide](https://www.christopheducamp.com/2013/12/16/creer-un-repo-github/)
3. Mettre le projet en ligne (par exemple sur https://heroku.com/)
3. Me transmettre l'url de votre repo et de l'app


## ACCÈS API

DOCUMENTATION : https://documenter.getpostman.com/view/8993685/SVtN5YCA?version=latest

Pour chaque requête il est nécessaire de passer le Token fourni en params

## Librairies utilisées
Voir [Package.json](package.json)

Les Docs :

- https://fr.vuejs.org/index.html
- https://fr.nuxtjs.org/
- https://github.com/axios/axios (utilisation possible via Nuxt https://axios.nuxtjs.org/)
- https://leafletjs.com/ (utilisation possible via VueJS https://github.com/KoRiGaN/Vue2Leaflet)

Docs UI :

- https://getbootstrap.com/docs/4.3/getting-started/introduction/ (Pour le CSS)
- https://bootstrap-vue.js.org/ (Pour le JS)
- https://fontawesome.com/icons?d=gallery

**Bon Hackathon !**
