#Get Node Image from dockerfile
FROM node:12-alpine

COPY . /demo

WORKDIR /demo

ENV PORT 80

RUN yarn install

CMD ["node", "index.js"]