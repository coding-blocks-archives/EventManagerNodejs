/**
 * Created by championswimmer on 05/06/17.
 */
const router = require('express').Router;
const models = require('../../db/models').models;
const passport = require('../../auth/passport');
const authutils = require('../../auth/authutils');

const route = router();

route.get('/',
    passport.authenticate('bearer'),
    (req, res) => {
    console.log(req)
    models.User.findAll().then((users) => {
        res.send(users);
    })
});

route.get('/:id',
    passport.authenticate('bearer'),
    (req, res) => {
    models.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((user) => {
        res.send(user);
    })
});

route.get('/:id/details',
    passport.authenticate('bearer'),
    authutils.ensureUserIsId({
        param: 'id'
    }),
    (req, res) => {
    models.User.findOne({
        where: {
            id: req.params.id
        },
        include: [models.UserLocal]
    }).then((user) => {
        res.send(user)
    })
});


module.exports = route;