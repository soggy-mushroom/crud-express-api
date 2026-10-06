const express = require('express');
const { port } = require('./config');
const posts = require('./routes/posts');
const app = express();

// Routes
app.use('/api/posts', posts);

app.listen(port, console.log(`Server is running on port ${port}`));