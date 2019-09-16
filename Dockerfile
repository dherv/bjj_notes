FROM node:12.3.1 AS build
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
EXPOSE 3000

FROM build as development
CMD ["yarn", "dev"]

FROM build as production
# copy all since the image will need the files to launch. not using git in production
COPY . /usr/src/app
CMD ["yarn", "prod"]



