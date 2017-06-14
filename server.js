/**
 * Created by championswimmer on 05/06/17.
 */
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('./auth/passport');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello World')
});

app.set("view engine", "hbs");

app.use(cookieParser('abracadabra'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({
    secret: 'abracadabra',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/pages'));

app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});