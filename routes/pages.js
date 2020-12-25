const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
  db.getAllPeople()
    .then((people) => {
      res.render('people', { people });
    })
    .catch((err) => {
      res.send(err);
    });
});

route.get('/add', (req, res) => {
  res.render('add_people');
});

route.post('/add', (req, res) => {
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => {
      res.redirect('/pages');
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = {
  route,
};
