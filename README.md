# Example application

This is an example for an application split into a backend and frontend.
The idea behind this application is to have a small project with different parts using docker-compose.

## Backend
The backend is a simple python application which has a hello REST endpoint, which is used by the frontend.

`GET http://localhost:5000/hello`

## Frontend
The frontend is a simple angular application with nearly none functionality, except for calling the backend.

When the application is running in docker, nginx is used for serving the application and reverse proxy the backend.
For the proxy part a default nginx configuration is copied while building the docker image.
## Docker

The backend as well as the frontend has both a Dockerfile, to be run simple as docker containers.

To make life easier there is also a docker-compose config, so the whole application can be build and run with one command.

Build application: `docker-compose build`

Run application: `docker-compose up -d`

Run application: `docker-compose down`
