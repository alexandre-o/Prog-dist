#[Site Web Projet](https://alexandre-o.github.io/Prog-dist/)

---

> Auteurs:   
>[**_PATEL Stéphane_**]()  
>[**_OGANEZOV Alexandre_**]()
>
> Temps de lecture: **_\~ 5 minutes_**
>
> Version: **_`1.0.0`_**

> `v1.0` `Bootstrap 5.1.3` `Font Awesome 5.15.4` `HTML 5` `JavaScript` `JQuery 3.6.0`  
> [Code source](https://github.com/alexandre-o/Prog-dist)  
> [URL](https://alexandre-o.github.io/Prog-dist/)

## Sommaire
- [Résumé](#Résumé)
- [Le site](#Le-site)
  ️
## Résumé
> Développement d'un site Web reprenant les informations du [Master en Cyber Sécurité de l'Unviersité de Paris DesCartes](https://odf.u-paris.fr/fr/offre-de-formation/master-XB/sciences-technologies-sante-STS/informatique-K2NDIF4R/master-informatique-parcours-cybersecurite-JT5NYCBV.html) dans le cadre d'un projet.

> Le site a été entièrement développé en HTML et JavaScript, en s'appuyant sur JQuery, sur le Framework Bootstrap pour la partie front-end du site, ainsi que de FontAwesome pour l'utilisation des différents icônes présents.

> L'index HTML contient la structure principale de la page affichée.
> Ce fichier contient l'en-tête HTML, la Barre de navigation qui fait office d'entête de page, le corps de la page (vide) ainsi que le pied de page.

Extrait du fichier `index.html`
```html
    ...
    <!-- Corps de la page -->
    <body class="h-100 w-100">
        <!-- division englobant l'ensemble des éléments au sein du body -->
        <div class="h-100 w-100">
                <!-- NavBar BootStrap: https://getbootstrap.com/docs/5.1/components/navbar/ -->
                <nav class="navbar navbar-expand-lg navbar-light bg-light rounded-lg sticky-top" id="navbar">
                    ...
                </nav>
            <!-- Division qui contiendra le code HTML de la page voulue, en fonction d'index.js -->
            <div id="container" class="bg-light mx-0 h-100 w-100" style="overflow-x: unset;">

            </div>
            <!-- Bas de page -->
            <div id="footer" class="mt-2 bottom text-center bg-dark text-white" aria-label="breadcrumb">
                <p>© 2022 Copyright: PATEL Stéphane, OGANEZOV Alexandre - <a href="https:github.com" class="text-decoration-none text-white" target="_blank" rel="noopener noreferrer">v1.0.0</a></p>
            </div>
        </div>
    </body>
    ...
```

> D'autres fichiers HTML sont présents dans les ressources, contenant les différents éléments à afficher dans le corps de l'index. Un élément à afficher est représenté par une division HTML (balise <div>) avec un id qui lui est propre (attribut id="").

> Le code JavaScript, contenu dans le fichier index.js, est utilisé par le fichier index.html exclusivement.
> Ce fichier contient la fonction affichageContainer(), qui permet d'actualiser le contenu HTML contenu dans le corps de la page index. Le code attends le chargement de la page par le navigateur avant de lancer cette fonction, puis rappelle la fonction lorsque le hash de l'URL du site change.

Extrait du fichier `index.js`
```javascript
    // Fonction qui va actualiser l'affichage de la division qui a pourt id #container dans la page index.html
    function affichageContainer(){
    	// On récupère la valeur du Hash de l'URL
    	var hash = window.location.hash;
    	// En fonction de cette valeur, on effectue un traitement spécifique
    	switch(hash){
    		// Si hash vaut "#admission"
    		case ("#admission"):
    			// On effectue une requête HTTP de type GET sur le fichier formation.html qui va nous retourner du code HTML dans la variable reponse
    			$.get("ressources/html/formation.html", function (reponse) {
    				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id admission, donc on filtre ça dans content
    				content = $(reponse).filter("#admission").html();
    				// On actualise la division #container de index.html par le contenu filtré de formation.html
    				$("#container").html(content);
    			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
    			break;
    			...
		}
	}
	
    // On attend que la page ait fini de chargé avant d'exécuter le code
    $(document).ready(function(){
    	// On appelle la fonction qui s'occupe d'actualiser l'affichage du container
    	affichageContainer();
    	// Dès que le hash changera, c'est à dire quand l'URL changera de #hash, on rappelera la fonction souhaitée
    	$(window).on("hashchange", function(){
    		affichageContainer();
    	});
    });
```

## Le site

###- Vous pouvez consulter le site Web en cliquant [ici](https://alexandre-o.github.io/Prog-dist/).  
  
###- Page d'accueil
![Accueil](./ressources/images/readme/accueil.png)

###- Page de présentation
![Présentation](./ressources/images/readme/presentation.png)

###- Page du programme
![Programme](./ressources/images/readme/programme.png)

###- Page d'admission
![Admission](./ressources/images/readme/admission.png)

###- Page des débouchés
![Débouchés](./ressources/images/readme/debouches.png)

###- Page du référentiel
![Référentiel](./ressources/images/readme/referentiel.png)

###- Page du résumé
![Résumé](./ressources/images/readme/resume.png)

###- Page des contacts
![Contacts](./ressources/images/readme/contacts.png)
