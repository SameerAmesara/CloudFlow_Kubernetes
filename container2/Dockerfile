FROM node:21-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 7000

CMD ["node", "src/app.js"]
