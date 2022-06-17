import express from 'express';

const user = express();

user.get('/info', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.status(200).json({
    user: req.user,
  });
});

export default user;
