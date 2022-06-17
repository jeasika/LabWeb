import express from 'express';
import { authRequired } from '../middleware/auth-required';
import authUser from '../controllers/auth-controller';
const user = express();

user.get('/info', authRequired, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

export default user;
