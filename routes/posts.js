const express = require('express');
const router = express.Router();

const { getAllPosts } = require('../controllers/post-controller.js');


router.get('/posts', getAllPosts);

module.exports = router;