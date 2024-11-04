
## Description

Nest framework TypeScript starter repository with Prisma and hexagonal architecture.

## Project setup

```bash
$ npm install
```
## Prerequisites

This example utilizes PostgreSQL DB. One of the ways to setup PostgreSQL is downloading and installing from https://www.postgresql.org/download/.

## Compile and run the project
```bash

# Set up DATABASE_URL env
$ export DATABASE_URL=postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME

# Run migrations to setup the DB and tables
$ npx prisma migrate dev --name init

# development
$ npm run start
