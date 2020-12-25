const express = require('express');

const app = express();

const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  db.getAllPeople()
    .then((people) => {
      res.render('people', { people });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/add', (req, res) => {
  res.render('add_people');
});

app.post('/add', (req, res) => {
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(3333, () => {
  console.log('http://localhost:3333');
});
