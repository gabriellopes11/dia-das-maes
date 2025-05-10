import http.server
import socketserver
import os
import sys

# Definir o diretório onde os arquivos estão
directory = os.path.join(os.path.dirname(os.path.abspath(__file__)), "caixa_presentes", "templates", "caixa_presentes")
os.chdir(directory)

# Configurar o servidor
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Iniciar o servidor
with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Servidor rodando em http://0.0.0.0:{PORT}")
    print(f"Para acessar de um celular, use o endereço IP do computador na rede local")
    print(f"Por exemplo: http://172.26.10.247:{PORT}/caixa.html")
    httpd.serve_forever()
