const Sequelize = require('sequelize');

const connectionString = 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(connectionString);

db.sync({force: false})
  .then(() =>  console.log("Db schema updated"))
  .catch(console.error)

module.exports = db;