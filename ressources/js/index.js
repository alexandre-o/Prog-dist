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
		// Si hash vaut "#contacts"
		case ("#contacts"):
			// On effectue une requête HTTP de type GET sur le fichier contacts.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/contacts.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id contacts, donc on filtre ça dans content
				content = $(reponse).filter("#contacts").html();
				$.get("ressources/python/scripts/contacts.py", function(reponse){
					console.log(reponse);
					// On Actualise les données des balises Mustache avec les données reçues par le script python.
					// Les noms des balises correspondent aux clefs du tableau JSON qui sont les clefs de la requete SQL.
					content = Mustache.render(content, reponse);					
					// On actualise la division #container de index.html par le contenu filtré de contacts.html
					$("#container").html(content);
				}, "json");
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si hash vaut "#debouches"
		case ("#debouches"):
			// On effectue une requête HTTP de type GET sur le fichier debouches.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/debouches.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id debouches, donc on filtre ça dans content
				content = $(reponse).filter("#debouches").html();
				// On actualise la division #container de index.html par le contenu filtré de debouches.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si hash vaut "#presentation"
		case ("#presentation"):
			// On effectue une requête HTTP de type GET sur le fichier formation.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/formation.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id presentation, donc on filtre ça dans content
				content = $(reponse).filter("#presentation").html();
				// On actualise la division #container de index.html par le contenu filtré de formation.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si hash vaut "#programme"
		case ("#programme"):
			// On effectue une requête HTTP de type GET sur le fichier formation.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/formation.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id programme, donc on filtre ça dans content
				content = $(reponse).filter("#programme").html();
				// On actualise la division #container de index.html par le contenu filtré de formation.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si hash vaut "#referentiel"
		case ("#referentiel"):
			// On effectue une requête HTTP de type GET sur le fichier referentiel.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/referentiel.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id programme, donc on filtre ça dans content
				content = $(reponse).filter("#referentiel").html();
				// On actualise la division #container de index.html par le contenu filtré de referentiel.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si hash vaut "#resume"
		case ("#resume"):
			// On effectue une requête HTTP de type GET sur le fichier resume.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/resume.html", function (reponse) {
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id resume, donc on filtre ça dans content
				content = $(reponse).filter("#resume").html();
				// On actualise la division #container de index.html par le contenu filtré de resume.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
		// Si la valeur de hash n'est reconnue par aucun des cas spécifié, on affiche une page par défaut
		default:
			// On effectue une requête HTTP de type GET sur le fichier accueil.html qui va nous retourner du code HTML dans la variable reponse
			$.get("ressources/html/accueil.html", function(reponse){
				// Le contenu que l'on souhaite récupréer se trouve dans la division avec pour id accueil, donc on filtre ça dans content
				content = $(reponse).filter("#accueil").html();
				// On actualise la division #container de index.html par le contenu filtré de accueil.html
				$("#container").html(content);
			}, "html"); // html sert à spécifier le type de contenu qui sera renvoyé par la requête
			break;
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
