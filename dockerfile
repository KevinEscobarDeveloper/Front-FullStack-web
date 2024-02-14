# Etapa 1: Construir la aplicación Angular
FROM node:18.17.1 AS builder
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli@latest
#RUN ng build --configuration 'production' --output-path ./dist

# Etapa 2: Servir la aplicación
#FROM nginx:1.23-alpine

#COPY --from=builder /app/dist/browser /usr/share/nginx/html
#EXPOSE 8080

#

RUN npm run build

FROM nginx:alpine
ARG name
COPY --from=builder /app/dist/anime-front/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
