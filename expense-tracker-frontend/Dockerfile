FROM node:21-alpine

WORKDIR /react-app

COPY ./package.json /react-app

RUN npm install --legacy-peer-deps

COPY . .

CMD npm start