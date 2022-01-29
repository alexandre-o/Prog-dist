#coding:utf-8
import http.server
import socketserver

hote = "localhost" # machine hôte du serveur
port = 80 # port HTTP par défaut
adresse = (hote, port) # "" pour localhost, via le port machine port

handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(adresse, handler)
# Affichage du bon lancement sur le terminal
print("Le server a démarré sur ", hote, ":", port)
# lancement du serveur en continu
httpd.serve_forever()