/**
 * Created by championswimmer on 05/06/17.
 */
const router = require('express').Router;

const route = router();

route.get('/', (req, res) => {
    res.send('GET all users')
});


module.exports = route;