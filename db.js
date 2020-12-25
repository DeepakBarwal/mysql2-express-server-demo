const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mytestdb',
});

function getAllPeople() {
  return new Promise(function (resolve, reject) {
    connection.query(`SELECT * FROM people`, function (err, rows, cols) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function addNewPerson(name, age, city) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO people(name,age,city) VALUES(?, ?, ?)`,
      [name, age, city],
      function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

module.exports = {
  getAllPeople,
  addNewPerson,
};
