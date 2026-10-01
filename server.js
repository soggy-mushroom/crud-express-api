const express = require('express');
const { port } = require('./config');
const app = express();


let posts = [
  { id: 1, title: "PosT 1"},
  { id: 2, title: "PosT 2"},
  { id: 3, title: "PosT 3"}
]

app.get('/api/posts', (req, res) => {
 res.json(posts);
})

app.listen(port, console.log(`Server is running on port ${port}`));