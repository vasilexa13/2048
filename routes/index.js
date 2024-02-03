var express = require('express');
const fs = require('fs');
var router = express.Router();
const bodyParser = require('body-parser');
var app = express();
const hashPass = require('../functions/hash');
const userData = require('../functions/UserData');
const findFromBase = require('../base/index')
const tokenGen = require('../functions/tokenGen');
const wrightTokenToBase = require('../base/wrightTokenToBase');
const regToBase = require('../base/register');
const isMailInBase = require('../base/isMailInBase');

router.post('/login', async (req, res) => {
  // console.log('req.body', req.body);
  let mail = req.body.mail;
  let pass = hashPass(req.body.pass);
  let user = req.body.userName;
  try {
    const value = await findFromBase(mail, pass);

    if (value !== null && value !== undefined) {

      //TOKEN
      let token = btoa(String(tokenGen()) + ":" + String(mail));//кодирование токена и mail в base64
      let id = value.dataValues.id;
      let baseToken = await wrightTokenToBase(id, token);

      // res.header('Authorization', `Bearer ${token}`);
      res.cookie('accessToken', token, {
        // httpOnly: true,
        sameSite: 'Strict'
      });
      res.json({ message: `Hello ${value.dataValues.userName}` });

    } else {
      console.log('User not found');
      res.cookie('accessToken', '', { maxAge: 0 })//очистка cookie
      res.json({ message: `User not found` });
    }
  } catch (err) {
    console.log('Error:', err);
    res.send('Error occurred');
  }
});


router.post('/register', async (req, res) => {
  let mail = req.body.mail;
  let pass = hashPass(req.body.pass);
  let user = req.body.userName;
  try {
    let userExists = await isMailInBase(mail);
    if (userExists) {
      console.log('пользователь с данным MAIL уже существует');
      res.json({ message: `пользователь с mail:${mail} уже существует` });
      res.end();
    } else {
      let result = await regToBase(mail, pass, user);
      console.log(result);
      res.json({ message: `Вы успешно зарегестрировались` })
      res.end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка регистрации');
  }
});

router.get('/login', function (req, res, next) {
  res.end(`login page`);
})

router.get('/register', function (req, res, next) {
  res.end(`register page`);
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'HOME page' });
});

function authenticateToken(req, res, next) {
  const token = req.accessToken;
  console.log(token, 'token');
}

router.get('/game', authenticateToken, (req, res) => {
  res.end('game page')
  // res.redirect('/login');
});


module.exports = router;
