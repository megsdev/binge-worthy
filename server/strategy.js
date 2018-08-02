const Auth0Strategy = require('passport-auth0');
const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = process.env;

console.log("XXX DOMAIN", DOMAIN)

module.exports = new Auth0Strategy({
   domain: DOMAIN,
   clientID: CLIENT_ID,
   clientSecret: CLIENT_SECRET,
   callbackURL: '/login',
   scope: 'openid email profile'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);