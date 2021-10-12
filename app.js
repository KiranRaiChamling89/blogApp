const express = require('express')
const app = express()
const port = 3000;

const postRoutes = require('./routes/posts');

app.use('/users', postRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))