const mysql = require('mysql2');
// const syncMysql = require('sync-mysql');

// function readMysql() {
//     const connection = new syncMysql({
//         host: 'localhost',
//         user: 'root',
//         database: '2048base',
//         password: '123qwe',
//         port: '3306',
//     });
//     let query = "SELECT * FROM users";
//     const result = connection.query(query);
//     console.log(result);
// }
// readMysql();

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

//получаем данные с БД
let query = 'SELECT * FROM users';
connection.query(query, (err, result, field) => {
    console.log('err', err);
    console.log('result', result);
    // console.log('result.length', result.length);
});

// закрытие подключения
connection.end(function (err) {
    if (err) {
        return console.log("Ошибка: " + err.message);
    }
    console.log("Подключение закрыто");
});
