import express from 'express';
import port from './config.js';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);

app.listen(port, console.log(`Server is running on port ${port}`));