const express = require('express');

const Users = require('./userDb.js')

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  Users.insert(req.body).then(response => res.status(201).json(response))
  .catch(error => res.status(500).json({ errorMessage: "Could not access data"}))
});

router.post('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  Users.get().then(response => res.status(200).json(response))
  .catch(error => res.status(500).json({ errorMessage: "Could not access data"}))
});

router.get('/:id', validateUserId, (req, res) => {
  Users.getById(req.params.id).then(response => res.status(200).json(response))
  .catch(error => res.status(500).json({ errorMessage: "Could not access data"}))
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.delete('/:id', validateUserId, (req, res) => {
  Users.remove(req.params.id).then(response => res.status(400).json(response))
  .catch(error => res.status(500).json({ errorMessage: "Could not access data"}))
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  Users.getById(req.params.id).then(response => {
    if (response) next();
    else res.status(404).json( { errorMessage: `Could not find user with id ${req.params.id}`})
  })
  .catch(error => res.status(500).json({ errorMessage: "Could not access data" }))
}

function validateUser(req, res, next) {
  if (req.body) {
    if (req.body.hasOwnProperty("name")) next();
    else res.status(400).json({ errorMessage: "Body missing 'name' attribute" })
  }
  else res.status(400).json({ errorMessage: "Body missing" })
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
