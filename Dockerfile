FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm install -g npm@9.7.2

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]