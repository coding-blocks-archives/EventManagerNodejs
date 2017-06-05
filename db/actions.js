/**
 * Created by championswimmer on 05/06/17.
 */
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