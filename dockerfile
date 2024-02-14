FROM node:18.17.1
RUN mkdir $WORK_DIR
WORKDIR ${WORK_DIR}

COPY package.json ./
RUN npm install

COPY . .


RUN npm install -g @angular/cli@17.1.2
RUN npm install

RUN --configuration production

COPY --from=builder /usr/share/nginx/html .

EXPOSE 8080


CMD ["nginx", "-g", "daemon off;"]