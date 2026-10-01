const express = require('express');
const { port } = require('./config');
const app = express();


let posts = [
  { id: 1, title: "PosT 1"},
  { id: 2, title: "PosT 2"},
  { id: 3, title: "PosT 3"}
]
// Get all posts
app.get('/api/posts', (req, res) => {
 const limit = parseInt(req.query.limit);

 if (!isNaN(limit) && limit > 0) {
  res.json(posts.slice(0, limit));
 } else {
  res.json(posts);
 }
})

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((posts) => posts.id === id));
 })

app.listen(port, console.log(`Server is running on port ${port}`));