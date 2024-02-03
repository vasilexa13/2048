const mysql = require('mysql2');
const userData = require('../functions/UserData');
const hashPass = require('../functions/hash');

// const CONFIG = require('./config');
// const connection = mysql.createConnection(CONFIG);
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '2048base',
    password: '123qwe',
    port: '3306',
});

// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

//Записываем данные в БД
let query = 'INSERT INTO 2048base.users';
let hash = hashPass(`${userData.userData.pass}`);
connection.query(`INSERT INTO 2048base.users (user_name, mail, pass) VALUES ('${userData.userData.userName}', '${userData.userData.mail}','${hash}')`);

// закрытие подключения
connection.end(function (err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});