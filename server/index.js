require('dotenv').config({ path: `${__dirname}/.env` })
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')
const passport = require('passport')
const strategy = require(`${__dirname}/strategy.js`)
const session = require('express-session')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(session({
  secret: 'shitballs',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(strategy)

passport.serializeUser(function (user, done) {
  done(null, { id: user.id, display: user.displayName, nickname: user.nickname, email: user.emails[0].value });
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


//MASSIVE
massive(process.env.CONNECTION_STRING, {
  scripts: `${__dirname}/db`

}).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(error => console.log(error))

//AUTH0
app.get('/login',
  passport.authenticate('auth0',
    { successRedirect: '/home', failureRedirect: '/login', failureFlash: true }
  )
);

app.get('/me', (req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

//ENDPOINTS
app.post('/api/list', controller.addShow)


const port = 4000
app.listen(port, () => { console.log(`server listening on port ${port}`) })