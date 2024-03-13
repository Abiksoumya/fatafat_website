FROM node:20-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN chown -R root:root /app

# Change to the root user
USER root


EXPOSE 5173

RUN npm install 

COPY . .



CMD ["sh","-c","npm run start"]