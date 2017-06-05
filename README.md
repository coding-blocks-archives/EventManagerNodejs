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

