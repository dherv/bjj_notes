FROM node:12.3.1 AS build
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
EXPOSE 3000

FROM build as development
CMD ["yarn", "dev"]

FROM build as production
# COPY application
COPY . .
CMD ["yarn", "prod"]



