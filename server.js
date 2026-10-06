import express from 'express';
import port from './config.js';
import posts from './routes/posts.js';
const app = express();

// Routes
app.use('/api/posts', posts);

app.listen(port, console.log(`Server is running on port ${port}`));