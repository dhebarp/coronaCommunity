const express = require('express');
const router = express.Router();
const { getArticles, addArticle} = require('../controllers/govNewsControlller');

router
.route('/')
.get(getArticles)
.post(addArticle);


module.exports = router;