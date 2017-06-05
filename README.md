# Event Management Website (in NodeJS)

## Step1: Create Basic Express App

Initialise NPM module and Install Express

```shell
npm init
npm install --save express
```

Contents of - server.js

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello World')
});

app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});
```

## Step2: Add stub API paths (Events and Teachers)

routes/events.js
```js
const router = require('express').Router;

const route = router();

route.get('/', (req, res) => {
   res.send("GET Array of Events")
});

route.post('/new', (req, res) => {
   res.send("POST Add new Event")
});

module.exports = route;
```

routes/index.js
```js
const router = require('express').Router;

const route = router();

route.use('/events', require('./events'));
route.use('/users', require('./users'));

module.exports = route;
```

Added to server.js

```js
app.use('/api', require('./routes/api'));
```

## Step3: Install some more dependencies we'll need

Install via NPM
```shell
npm install --save body-parser sequelize mysql2
```


Also we have to install the MySQL community edition to our computer
Use this page to download it -
<https://dev.mysql.com/downloads/mysql/>

## Step4: Setup the DB

Run MySQL as root `mysql -u root -p` and create a DB and a User

```sql
CREATE DATABASE eventman;
CREATE USER eventadmin IDENTIFIED BY 'eventpass';
USE eventman;
GRANT ALL PRIVILEGES ON eventman to eventadmin@'%';
```

Login using the new user and verify the database is accessible, first
login with `mysql -u eventadmin -p`


```sql
USE eventman;
```

## Step5: Add DB models and functions

Add db/models.js where the tables are defined

```js
const Sequelize = require('sequelize');

const db = new Sequelize('eventman', 'eventadmin', 'eventpass', {
    host: 'localhost',
    dialect: 'mysql'
});

const Event = db.define('event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    startTime: Sequelize.DATE,
    endTime: Sequelize.DATE,
    hostMessage: Sequelize.STRING,
    venue: Sequelize.STRING
});

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

db.sync()
    .then(() => {
        console.log("Database Synchronised");
    })
    .catch((err) => {
        console.log("Error setting up Database");
        console.error(err);
    });

module.exports = {
    db,
    models: {
        User,
        Event
    }
};
```

Also add a db/actions.js where the functions reside

```js
const db = require('./models').db;
const models = require('./models').models;

function addUser(name, email) {
    return models.User.create({
        name, email
    })
}

module.exports = {
    addUser
};
```