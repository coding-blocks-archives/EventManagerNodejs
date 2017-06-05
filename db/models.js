/**
 * Created by championswimmer on 05/06/17.
 */
const Sequelize = require('sequelize');

const db = new Sequelize('eventman', 'eventadmin', 'eventpass', {
    host: 'localhost',
    dialect: 'mysql'
});

const Event = db.define('event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    startTime: Sequelize.DATE,
    endTime: Sequelize.DATE,
    hostMessage: Sequelize.STRING,
    venue: Sequelize.STRING
});

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

db.sync()
    .then(() => {
        console.log("Database Synchronised");
    })
    .catch((err) => {
        console.log("Error setting up Database");
        console.error(err);
    });

module.exports = {
    db,
    models: {
        User,
        Event
    }
};