
# CubeJS Analytics Project

## Overview

This project showcases the capabilities of **CubeJS** by integrating it with a **ReactJS** client app powered by **Mantine**, resulting in the creation of sophisticated, tailored, and user-friendly analytics dashboards.

## Project Scope

1. **CubeJS Service Setup**: Establish the CubeJS service with a designated data source (utilizing Postgres in this instance).
2. **ReactJS Front-end Application Setup**: Develop a ReactJS front-end application that connects seamlessly to the CubeJS service.
3. **Custom Visualisations** - Develop custom views using ReactJS to display complex data in an intuitive manner.
4. **Dockerization of the Stack**: Containerize the entire stack to facilitate a quick and hassle-free setup without requiring any modifications.


## Project USPs and Improvement

1. **Cutting Edge Front-end Technologies with a clean design** - This project improves immensely on all the example projects in its clean and modern approach towards Front-end dashboard development using React
2. **Dockerized Environment** - All the services (expect the client app) are dockerized resulting in a smooth dev journey
3. **Takes on more complex visualizations using D3** - this project builds on all the example projects by cube team and introduces one complex visualization

## Project Notes

1. For simplicity and focus, the project utilizes a **ecom-dump.sql** from a demo project. This eliminates the need for extensive data modeling and migrations, streamlining the development process.


## Steps

### Prepare Database

1. `docker compose up -d`
2. `docker exec -i cube-datasource psql -U malik --dbname cube < ecom-dump.sql`

### Load env variables

1. copy `.env.example` to `.env`

## CubeJS Playground

available at http://localhost:4000

## React Dashboard

1. `cd dashboard`
2. `yarn dev`
3. dashboard is available at https://localhost:3000
   
> Reference - https://cube.dev/blog/d3-dashboard-with-react-and-material-ui