const express = require('express');
const router = express.Router();

const authorController = require('../controller/authorController');

// all author
router.get('/', authorController.authors_index_get);

// new author
router.get('/new', authorController.authors_new_get);

//create author
router.post('/', authorController.authors_index_post)
module.exports = router;