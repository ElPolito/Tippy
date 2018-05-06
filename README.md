# Tippy
Tippy est une bibliotheque Javascript permettant de faire apparaitre facilement des bulles d'informations ou des menus sur vos pages !

## Intégration
Pour intégrer Tippy dans vos pages HTML ajoutez les deux lignes suivantes dans la balise Head :
```
<script type="text/javascript" src="Tippy.js"></script>
<link rel="stylesheet" href="Tippy.css"/>
```
C'est tout vous pouvez maintenant commencer !

## Les Bulles d'Informations
Pour ajouter des bulles qui apparaissent lors du survol d'un élément, il vous suffit d'ajouter l'un des attributs suivants sur l'élément cible :
* tippy-up
* tippy-bottom
* tippy-left
* tippy-right
* tippy-middle
Une fois que vous avez fait ceci il faut ajouter l'attribut **tippy-title** avec le texte qui sera afficher dans la bulles sur le même élément .

### Exemple
```
<div tippy-up tippy-title="Ceci est une bulle d'information"></div>
```

## Les menus
Tippy vous fournit deux types de menus, un menu qui apparait lors du click sur un élément et un autre qui apparait lors d'un click droit.
* tippy-menuC (pour le click gauche)
* tippy-menuRC (pour le click droit)
Ensuite, il faut ajouter les données du menu et l'action lors du click, pour cela ajouter l'attribut tippy-val en ecrivant les données sous cette forme : {premier texte,deuxieme texte,...},{action1,action2,...} en sachant que les actions sont des fonctions Javascript qui seront appelées lors du click.

Vous pouvez aussi spécifier un titre pour votre menu en ajoutant l'attribut tippy-menu-title.

Pour le menu click gauche vous pouvez spécifier l'attribut tippy-menu-stay pour indiquer que le menu doit disparaitre lorsqu'on click autre part sinon, le menu disparait lors du nouveau click sur l'élément cible.

### Exemple
```
<div tippy-menuC tippy-val="{Appeler,Supprimer,Modifier},{call,delete,modify}"
tippy-menu-title="Mon menu" tippy-menu-stay></div>
```

## Les thèmes
Vous pouvez modifier le thème de vos bulles et vos menus en ajoutant l'attribut tippy-cla pour mofifier le thème occasionnelement ou modifier la variable yourCla dans le script Tippy.js. 
Voici les différents thèmes présents :
* classique ( "" dans l'attribut ou null pour la variable )
* rectangle ( _rect )
* without arrow ( _warr )

Vous pouvez aussi créer vos propres thèmes en suivant la logique de Tippy.css.

## Les raccourcis
Vous pouvez utiliser des raccourcis au lieu d'écrire les noms d'attributs en entier. Pour les utiliser, il faut ajouter l'attribut tippy-sc sur n'importe quel élément.
```
<body tippy-sc>
  ...
</body>
```
Voici la liste des raccourcis disponible :
* t-up
* t-bot
* t-le
* t-ri
* t-mid
* t-mrc
* t-mc
* t-tit
* t-val
* t-m-tit
* t-cla
* t-m-stay
