### Description

Expense Tracker is an example of a full app built with Nestjs (Backend) and React (Frontend)

### Technologies

expense-tracker-backend (Backend):

- Nestjs + Typescript
- Mikro-orm
- Postgresql

expense-tracker-front (Frontend):

- React + Typescript
- styled-components

### How to run it

expense-tracker-backend (Backend):

- docker-compose up --build

Alternatively, you can run it using your local database:

- Change `host` to localhost in the file `expense-tracker-backend/src/mikro-orm.config.ts`
- docker build -t expensetracker .
- docker run -p 4000:4000 expensetracker
- Or just `npm install` & `npm run start:dev`

Docker-compose should create the tables. Otherwise, the scripts are in the folder `/sql`.

expense-tracker-front (Frontend):

- docker build -t expensetrackerapp .
- docker run -p 3000:3000 expensetrackerapp
- Or just `npm install --legacy-peer-deps` & `npm start`
