# City Bike backend

This is a backend of a web application for displaying data from journeys made with city bikes in the Helsinki Capital area.


You can read more about the requirements for this application from [the exercise by Solita](https://github.com/solita/dev-academy-spring-2024-exercise).


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
PG_USER=<database user>
PG_HOST=<database host>
PG_DB=<database name>
PG_PASSWORD=<database password>
PG_PORT=<database port>
PORT=<server port>
```

## Run Locally

[Set up and run the database](https://github.com/solita/dev-academy-spring-2024-exercise#instructions-for-running-the-database)

Clone the project

```bash
  git clone git@github.com:lapaset/citybike-backend.git
```

Go to the project directory

```bash
  cd citybike-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run build & npm start
```

