FROM node:21-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 6000

CMD ["node", "src/app.js"]
