const Sequelize = require('sequelize');
const db = require('../db');


const Events = db.define("event",{
    eventname:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Events;