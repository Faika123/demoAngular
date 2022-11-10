# Monsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
----------------------------

Project Steps:
*** Front End ***
- create an front end angular project: ng new monapp
- integrate bootstrap as css framework in (angular.json - styles part)
- add appareils component: ng generate component appareils
- add appareil item component
- add contact component
- add navbar in header component
- create a git commit & push to your github repository !! 
- create version1 branch and push to github
- create version2 branch
- add routing module in app-routing.module.ts
- add appareil component content (ngFor)
- add appareil item component content (@Input())
- add ngIf directive to show off appareil in red
- add appareil model
- add appareil service and make a depency injection
- generate a build project (ng build) (to generate your website)
v4- Un bouton Login / Logout (avec un timer pour simuler le login)
v4- Redirection vers Component Appareils
v4- Découvir la notion 'Pipe' avec une date
v4- Activer les boutons 'Allumer tout' et 'Eteindre tout' et ajouter un message de confirmation avant eteindre tout
v4- Ajouter bouton Allumer et Etteindre pour chaque appareil
v4- Connecter la partie backend avec notre site (Module http)

==========
*** Back End ***
- backend nodeJs & Express
- pour exécuter un script nodejs (script javascript): node filename.js
- install nodemon: npm i nodemon -g
- insall express framework : npm install express
- create the API REST (Representational State Transfer) (GET, POST, PUT, DELETE)
v4- Creation des comptes MongoDb Atlas (service cloud offert) pour créer une base de données No SQL MongoDB
v4- Ajouter un model mongoDb avec Mongoose
v4- Tester la  connection vers le serveur MongoDb
v4- Mettre à jour les API pour trvailler sur MongoDB
