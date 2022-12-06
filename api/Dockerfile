FROM node:19.2.0-alpine

RUN npm i -g npm@8.15.1

RUN mkdir -p /app

COPY ./package.json ./package-lock.json  /app/

WORKDIR /app

RUN npm install --production

COPY ./ /app/

CMD ["npm", "start"]
