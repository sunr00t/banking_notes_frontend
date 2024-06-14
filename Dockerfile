FROM node:lts-alpine

WORKDIR /app

COPY . /app

RUN  npm install -g npm@latest

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]