import { User } from '../models/user';
import { connection } from '..';

const addGoogleUser = ({ id, email, firstName, lastName }) => {
  var sqlQuery =
    'INSERT INTO users (id, email, firstName, lastName, source) VALUES (' +
    id.toString() +
    ",'" +
    email +
    "','" +
    firstName +
    "','" +
    lastName +
    "',' ' " +
    ')';
  console.log(sqlQuery);
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
};

const getUsers = () => {
  connection.query('SELECT * FROM users', function (err, result, fields) {
    if (err) throw err;
    return result;
  });
};
const getUserByEmail = (email) => {
  let sqlQuery = "select * from users where email='" + email + "'";
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    // console.log(email, result[0]);
    return { user: result[0] };
  });
};
const getUserById = ({ id }) => {
  let sqlQuery = "select * from users where id='" + id + "'";
  connection.query(sqlQuery, function (err, result, fields) {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

export { addGoogleUser, getUsers, getUserByEmail, getUserById };
