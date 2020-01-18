FROM node:dubnium as build

WORKDIR /build
 
COPY .  /build 

RUN npm install \
    && npm run build \
    && npm prune --production

CMD ["npm", "run","watch"]



