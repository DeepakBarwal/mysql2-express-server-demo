const route = require('express').Router();
// This route is on the "/api/" path

const db = require('../db');

route.get('/people/', (req, res) => {
  // Send all people as an array
  db.getAllPeople()
    .then((people) => {
      res.send(people);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

route.post('/people/', (req, res) => {
  // Add the new person (details are in body)
  db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(() => res.redirect('/api/people'))
    .catch((err) => res.send({ error: err }));
});

module.exports = {
  route,
};
