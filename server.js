/**
 * Created by championswimmer on 05/06/17.
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello World')
});

app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});