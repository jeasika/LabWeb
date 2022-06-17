import GoogleStrategy from 'passport-google-oidc';
import passport from 'passport';
import { googleCallback, googleClientId, googleClientSecret } from '../config';
import { userRepository } from '../database';
import { connection } from '../database/mongo';

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: googleCallback,
      scope: ['profile', 'email'],
    },
    async (_issuer, profile, callback) => {
      const { id } = profile;
      const email = profile.emails[0].value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;

      let sqlQuery = "select * from users where email='" + email + "'";
      connection.query(sqlQuery, function (err, result, fields) {
        if (err) throw err;
        if (!result[0]) {
          const newUser = userRepository.addGoogleUser({
            id,
            email,
            firstName,
            lastName,
          });
          console.log('New user');
          return callback(null, newUser);
        } else {
          let currentUser = { ...result[0] };
          currentUser.lastVisited = new Date();
          console.log('Current:', currentUser);
          return callback(null, currentUser);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('user', user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let sqlQuery = "select * from users where id='" + id + "'";
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    if (!result[0]) {
      done(null, {});
    } else {
      let currentUser = { ...result[0] };
      currentUser.lastVisited = new Date();
      console.log('Deserialized:', currentUser);
      done(null, currentUser);
    }
  });
});
