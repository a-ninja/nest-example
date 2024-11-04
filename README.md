
## Description

Nest framework TypeScript starter repository with Prisma and hexagonal architecture.

<img width="1154" alt="Screenshot 2024-11-04 at 2 28 49 PM" src="https://github.com/user-attachments/assets/a3fae30d-6ad9-421e-977b-972448165cae">

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
