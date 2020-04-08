const express = require('express');

const router = express.Router();
const Blogs = require('../posts/postDb')

router.get('/', (req, res) => {
  Blogs.get().then(response => {
    res.status(200).json(response);
  })
  .catch(error => res.status(500).json({ errorMessage: "Could not access data"}))
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
