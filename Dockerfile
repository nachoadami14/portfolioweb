# Usamos una imagen ligera de Nginx
FROM nginx:alpine

# Copiamos todo lo que está en tu carpeta 'claude_portfolio' 
# a la carpeta donde Nginx busca los archivos
COPY ./claude_portfolio /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
