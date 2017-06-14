/**
 * Created by championswimmer on 14/06/17.
 */
const route = require('express').Router();
const dbActions = require('../db/actions');
const passport = require('../auth/passport');
const el = require('../auth/authutils').ensureLogin;

route.get('/login', (req, res) => {
    res.render("login", {})
});

//TODO : Use Passport to login
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/profile'
}));

route.get('/signup', (req, res) => {
    res.render("signup", {});
});

route.post('/signup', (req, res) => {
    dbActions.signUp(
        req.body.name,
        req.body.email,
            req.body.username,
            req.body.password
    ).then((userlocal) => {
        res.redirect('/login')
    })
});

route.get('/profile', el('/login'), (req, res) => {
        res.render("profile", {
            name: req.user.name,
            email: req.user.email
        });
});

route.get('/logout', (req, res) => {
    req.user = null;
    req.logout();
    req.session.destroy(() => {
        res.redirect('/login')
    });

});

module.exports = route;
