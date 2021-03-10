#Get Node Image from dockerfile
FROM node:12-alpine

WORKDIR /demo

ENV PORT 80

COPY package.json /code/package.json

RUN yarn install

COPY . /code

CMD ["node", "index.js"]