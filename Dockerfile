FROM node:12

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn add ts-node-dev --dev
RUN yarn install

EXPOSE 3334
CMD ["yarn", "start"]
