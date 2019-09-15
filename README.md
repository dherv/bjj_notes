### Docker

Run:

- dev: `docker-compose up --build`
- prod: `docker-compose -f production.yml up -d`

##### migrations

One docker up, run the followings:

- dev: `docker-compose exec web yarn migrate:up -e dev`
- prod: `docker-compose exec web yarn migrate:up -e prod`
