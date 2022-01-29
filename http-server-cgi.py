#coding:utf-8
import http.server

hote = "localhost" # machine hôte du serveur
port = 8080 # port choisi pour eviter les conflits avec WAMP
adresse = (hote, port) # "" pour localhost, via le port machine port
serveur = http.server.HTTPServer

handler = http.server.CGIHTTPRequestHandler
handler.cgi_directories = ["/ressources/python"] # emplacement du fichier python index.py

httpd = serveur(adresse, handler)
# Affichage du bon lancement sur le terminal
print("Le serveur a démarré sur ", hote, ":", port)
# lancement du serveur en continu
httpd.serve_forever()