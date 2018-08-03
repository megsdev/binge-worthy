const express = require('express')
const massive = require('massive')

const app = express();

//MASSIVE
massive(process.env.CONNECTION_STRING, {
    scripts: `${__dirname}/db`

}).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(error => console.log(error))


module.exports = app;