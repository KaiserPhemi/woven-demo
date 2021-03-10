#Get Node Image from dockerfile
FROM node:12-alpine
WORKDIR index
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 7000

CMD ["node", "index.js"]