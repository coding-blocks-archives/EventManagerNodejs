# Event Management Website (in NodeJS)

## Step1: Create Basic Express App

Install Express

```shell
npm install --save express
```

server.js

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