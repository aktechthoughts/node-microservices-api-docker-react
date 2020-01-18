FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
COPY . ./

RUN npm install --production



CMD ["npm", "start"]