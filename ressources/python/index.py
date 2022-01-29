#coding:utf-8
import cgi
# Il faut mettre cette entête pour pouvoir afficher le code HTML
print("Content-type: text/html; charset=utf-8\n")
# On va ouvrir index.html en lecture seule pour récupérer le code HTML à afficher
fichier = open("../../index.html", "r")
# On lit l'intégralité du fichier et on affecte le contenu à la variable html
html = fichier.read()
# O ferme le fichier lu
fichier.close()
# On affiche le contenu 
print(html)