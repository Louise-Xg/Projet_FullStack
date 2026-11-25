# Projet_FullStack

# Comment initialiser un projet fullstack :

1. Créer un dossier nomduprojet avec `mkdir nomduprojet` et créer un repo sur Github avec le nomduprojet
2. Créer un projet React avec Vite et le nommer frontend
3. git clone le repo du backend du formateur et le renommer backend avec `mv` tel que : `mv anciennomdurepo backend`
4. Supprimer le .git du dossier backend/, synchroniser avec le repo nomduprojet Github
5. Nettoyer les dossiers frontend/ et backend/ puis retourner sur le terminal racine du projet et `git add .`, `git commit -m "Initialization of the project"`et `git push` ou `git push --set-upstream origin nomdelabranche`

# Détails :

- créer un fichier `readme.md`
- initialiser un frontend/
  - `npm create vite@latest frontend`
    - React
    - TS
    - ESLint
    - y
  - nettoyer le sous-dossier créé
    - supprimer frontend/src/\*.css
    - supprimer les appels au css dans frontend/src/\*.tsx
    - vider le fichier frontend/src/App.tsx
    - supprimer frontend/public/icons.svg

  - npm i

- initialiser un backend/
  - `git clone git@github.com:LoicBrassart/dwwm-ts-backend-express-template.git`
    - supprimer .git
  - créer le .env
  - nettoyer le sous-dossier
  - retirer la route GET/pokemon
  - créer une route GET/ simple

  - npm i

# Piste possible de projet :

Séismes, créer une page permettant de localiser des séismes sur une carte et de faire des projections 2D, chaque séisme a une fiche de présentation contenant les infos suivants : date, localisation 3D, magnitude, photos du lieu ou des dégâts + 1 zone permettant de donner son ressenti si la personne a été présente

# Note :

Possibilité de créer le repo de deux manières :

- Option 1 : Le monorepo, 1 repo = le projet
  ![Maquette_de_mobile_et_desktop](img/option1.png)

- Option 2 : Le deux repo dans le projet
  ![Maquette_de_mobile_et_desktop](img/option2.png)

  Ici, l'option 1 a été choisie et les readme des dossiers frontend/ et backend/ ont été supprimés
