# App serverless electron - menu d'une pizzeria



## Installation
```bash
git clone https://github.com/Arthaudcom/aws-electron-app.git
npm i 
```

## Lancement de l'app

```bash
cd app
npm start
```
## Le projet

Application de bureau multi plateformes développée avec AWS et Electron

<img src="https://iconape.com/wp-content/files/rp/370831/svg/electron-logo-icon-png-svg.png" alt="drawing" width="100" style="margin:70px"/>   
<img src="https://mti.com/wp-content/uploads/2021/04/Amazon-Web-Services-Logo-White.png" alt="drawing" width="100" style="margin:70px"/>

## Fonctionnalités du projet



### Lister


Affiche la liste des pizzas qui sont stockées dans le compartiment AWS S3. Lorsque l'on clique sur une pizza, on accède au détail des informations (base de la pizza, description, ingrédients, différents prix en fonction de la taille).

### Ajouter un soulier

L'utilisateur peut ajouter une nouvelle pizza à la liste, il faut cliquer sur le bouton puis ajouter les détails de la pizza. Cette pizza sera stockée dans le compartiment AWS S3 et apparaîtra donc dans la liste de pizzas.

## Explication du backend serverless avec AWS Lambda

### Fonctions Lambda

Trois fonctions Lambda (Node.js) sont stockées sur AWS. Pour chacune, un déclencheur du type API Gateway est activé,
à l'écoute des requêtes GET ou POST. Pour accéder au fonctions lambdas, visitez <a href="https://github.com/Arthaudcom/aws-electron-app/tree/main/lambda">ce dossier</a>.

### Bucket S3

La liste de soulier est stockée dans un compartiment S3, dans un fichier JSON.
Ce fichier est lu ou édité selon la fonction lambda déclenchée.

Exemple de données contenues dans le fichier JSON.

```json
[
	{"nom":"Calzone",
	"base":"Sauce tomate",
	"description":"pizza pliée en 2",
	"ingredients":"farine, eau, sel, sauce tomate, champignons, mozarella, basilic",
	"prixPetite":"9€",
	"prixMoyenne":"12€",
	"prixGrande":"15€",
	"id":0},
	
	{"nom":"Espagnole",
	"base":"Sauce tomate","description":"pizza à base de chorizo","ingredients":"farine, eau, sel, sauce tomate, chorizo, poivrons, olives",
	"prixPetite":"8€",
	"prixMoyenne":"11€",
	"prixGrande":"14€",
	"id":0}    
]
```
### API Gateway

Pour ce projet, des déclencheurs ont été mis en place pour les fonctions Lambdas.
Ce sont des API à l'écoute des requêtes HTTP.
* L'API de la fonction d'ajout écoute les requêtes POST
* L'API des fonctions pour lister et chercher par id écoute les requêtes GET

Lorsqu'une requête est envoyée, la fonction lambda est déclenchée, elle envoie alors du contenu au client via l'app électron.
