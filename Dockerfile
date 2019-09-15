FROM node:12.3.1

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]



