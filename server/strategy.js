const Auth0Strategy = require('passport-auth0');
const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;
const app = require('./app')

module.exports = new Auth0Strategy({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: '/login/callback',
  scope: 'openid email profile friends'
},
  function (accessToken, refreshToken, extraParams, profile, done) {
    let db = app.get('db')

    db.getUser([profile.user_id]).then(user => {

      if (!user.length) {
        db.addUser([profile.displayName, profile.user_id, profile.friends, profile.picture])
          .then(user => {
            return done(null, user[0]);
          })
      }

      return done(null, {
        ...profile,
        id: user[0].id,
      });
    })

  }
);