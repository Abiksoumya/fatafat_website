FROM node:20-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .

EXPOSE 5173

RUN npm install 

COPY . .



CMD ["sh","-c","npm run start"]