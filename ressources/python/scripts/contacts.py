#coding:utf-8
import cgi
import json
import mysql.connector
try:
    # Initialisation de la connexion MySQL
    bddConnexion = mysql.connector.connect(host="localhost", user="root", passwd="root", database="base")
    # On récupère le curseur pour pouvoir faire des transactions SQL
    bdd = bddConnexion.cursor()
    # Requête SQL
    bdd.execute("SELECT contact_Nom AS NOM, contact_Prenom AS PRENOM, contact_Mail AS MAIL, contact_Titre AS TITRE FROM contacts")
    # Résultat de la requête
    contacts = bdd.fetchall()
    # On est obligé de récupérer les clefs SQL à la main, car par de Fetch Assoc possible
    clefsRecuperees = [indice[0] for indice in bdd.description]
    # Contiendra le 'tableau associatif' final
    resultat = []
    # Pour chaque élément du tableau retourné par la requête
    for contact in contacts:
        # Initialisation du dictionnaire temporaire qui contiendra les clefs associées aux valeurs correspondantes
        jsonContact = {}
        # On parcours chaque valeur en fonction du nombre de clé
        for indice in range(len(clefsRecuperees)):
            # On ajoute l'association clef valeur
            jsonContact[clefsRecuperees[indice]] = contact[indice]
        # On ajoute le contat courant à la variable finale
        resultat.append(jsonContact)

    # Il faut mettre cette entête pour pouvoir retourner le code JSON
    print("Content-type: application/json; charset=utf-8\n")
    # On retourne le resultat transformé en tableau JSON pour être utilisé par index.js
    print(json.dumps(resultat, separators=(',', ':')))
except Exception:
    print(json.dumps({}, separators=(',', ':')))