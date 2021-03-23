FROM node:9.11.1-alpine
WORKDIR /App
COPY package*.json ./

COPY . .
RUN npm install &&\
    npm run build

CMD ["npm", "run", "dev"]