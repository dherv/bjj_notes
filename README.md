### Docker

Build run:

- dev: `docker-compose up --build`
- prod: `docker-compose -f production.yml up -d`
  prod: see Docker hub section

##### Docker hub

To push production image:
`docker-compose -f production.yml build --pull --compress --parallel && docker-compose -f production.yml push`

##### in EC2

If not previously created, add docker-compose.yml file with following contents:

```
version: "3.7"
services:
  web:
    image: dherv/bjj-notes-server
    ports:
      - 5000:3000
```

Next (or on each following deployment), prune the docker system to get rid of previous content and pull/build the image:

```
docker system prune
docker-compose pull && docker-compose up --build -d
```

##### migrations

One docker up, run the followings:

- dev: `docker-compose exec web yarn migrate:up -e dev`
- prod: `docker-compose exec web yarn migrate:up -e prod`
