require('dotenv').config({ path: `${__dirname}/.env` })
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')
const passport = require('passport')
const strategy = require(`${__dirname}/strategy.js`)
const session = require('express-session')
const app = require('./app');


app.use(bodyParser.json())
app.use(cors());

app.use(session({
  secret: 'shitballs',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(strategy)

passport.serializeUser(function (user, done) {
  // console.log('serialzed user', user);

  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // console.log('deserialized user', user);
  let db = app.get('db')
  db.getUser([user.user_id])
    .then(user => {
      done(null, user[0])
    })
});

//AUTH0
app.get('/login',
  passport.authenticate('auth0',
  ),
  (req, res) => {
    console.log('req.user', req.user)
  }
);

app.get('/login/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/home',
  failureRedirect: 'http://localhost:3000/login',
  failureFlash: false

}))

app.get('/me', (req, res, next) => {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

//ENDPOINTS
app.post('/api/list', controller.addShow)

const port = 4000
app.listen(port, () => { console.log(`server listening on port ${port}`) })