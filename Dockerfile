FROM node:10-alpine

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npx", "ts-node", "main.ts" ]