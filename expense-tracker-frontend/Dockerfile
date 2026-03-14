FROM node:22-alpine

WORKDIR /react-app

COPY ./package.json ./package-lock.json /react-app/

RUN npm ci

COPY . .

CMD ["npm", "start"]