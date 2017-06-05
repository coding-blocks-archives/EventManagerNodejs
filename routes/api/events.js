/**
 * Created by championswimmer on 05/06/17.
 */
const router = require('express').Router;

const route = router();

route.get('/', (req, res) => {
   res.send("GET Array of Events")
});

route.post('/new', (req, res) => {
   res.send("POST Add new Event")
});

module.exports = route;