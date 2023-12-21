
# CubeJS Analytics Project

## Overview

This project showcases the capabilities of **CubeJS** by integrating it with a **ReactJS** client app powered by **Mantine**, resulting in the creation of sophisticated, tailored, and user-friendly analytics dashboards.

## Project Scope

1. **CubeJS Service Setup**: Establish the CubeJS service with a designated data source (utilizing Postgres in this instance).
2. **ReactJS Front-end Application Setup**: Develop a ReactJS front-end application that connects seamlessly to the CubeJS service.
3. **Custom Visualisations** - Develop custom views using ReactJS to display complex data in an intuitive manner.
4. **Dockerization of the Stack**: Containerize the entire stack to facilitate a quick and hassle-free setup without requiring any modifications.


## Project USPs and Improvement

1. **Cutting Edge Front-end Technologies with a clean design** - This project improves on all the example projects in its clean and modern approach towards Front-end dashboard development using React and Mantine
2. **Dockerized Environment** - All the services (expect the client app) are dockerized resulting in a smooth dev process.
3. **Custom Dashboards using D3** - this project builds on all the example projects by cube team and introduces one custom visualization

## Project Notes

1. For simplicity and focus, the project utilizes a **ecom-dump.sql** from a demo project. This eliminates the need for extensive data modeling and migrations, streamlining the development process.

## Screenshots

<img width="1721" alt="Screenshot 2023-12-21 at 10 27 37 PM" src="https://github.com/MalikBagwala/cubejs-demo/assets/23068029/36b2561f-3825-48dc-8734-ae6393114f30">
<img width="1715" alt="Screenshot 2023-12-21 at 10 27 06 PM" src="https://github.com/MalikBagwala/cubejs-demo/assets/23068029/03f8fe21-bb32-4318-a7a2-0d11adef4d59">
<img width="1721" alt="Screenshot 2023-12-21 at 10 27 21 PM" src="https://github.com/MalikBagwala/cubejs-demo/assets/23068029/53e3c189-14ce-4978-978c-ce888d7d9130">

## Steps for setting up on local machine

### Load env variables

1. copy `.env.example` to `.env`

### Prepare Database and docker containers (https://docs.docker.com/engine/install/ to install docker)

1. `docker compose up -d`
2. `docker exec -i cube-datasource psql -U malik --dbname cube < ecom-dump.sql`

### Spin up react dashboard

1. `yarn install`
2. `yarn dev`
3. dashboard is available at https://localhost:3000

## CubeJS Playground

available at http://localhost:4000
