const passport = require ('passport');

// Google oauth
module.exports = app => {
  app.get (
    '/auth/google',
    passport.authenticate ('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account'
    })
  );

  app.get (
    '/auth/google/callback', 
    passport.authenticate ('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // User log out 
  app.get ('/api/logout', (req, res) => {
    req.logout ();
    res.redirect ('/');
  });

  // Get the googleId and user profile
  app.get ('/api/current_user', (req, res) => {
    res.send (req.user);
  });
};
