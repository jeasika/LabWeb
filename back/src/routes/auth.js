import express from 'express';
import passport from 'passport';

import('../controllers/auth-controller');

const auth = express();

auth.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
  (req, res) => {
    req.session.returnTo = req.headers.referer;
  }
);

auth.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:4200/',
    failureFlash: true,
  }),
  (req, res) => {
    let redirectTo = 'http://localhost:4200/';
    if (req.session.returnTo) {
      redirectTo = req.session.returnTo; // If our redirect value exists in the session, use that.
      req.session.returnTo = null; // Once we've used it, dump the value to null before the redirect.
    }

    res.redirect(redirectTo);
  }
);

auth.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default auth;
