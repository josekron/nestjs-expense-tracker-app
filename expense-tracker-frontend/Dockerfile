FROM node:21-alpine

WORKDIR /react-app

COPY ./package.json ./package-lock.json /react-app/

RUN npm ci --legacy-peer-deps

COPY . .

CMD ["npm", "start"]