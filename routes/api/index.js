/**
 * Created by championswimmer on 05/06/17.
 */
const router = require('express').Router;

const route = router();

route.use('/events', require('./events'));
route.use('/users', require('./users'));


module.exports = route;