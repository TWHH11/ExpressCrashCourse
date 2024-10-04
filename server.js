
import express from 'express';
import path from 'path'
import {fileURLToPath } from 'url'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

const app = express()

// Get the directory name

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Body parser midddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Logger middleware
app.use(logger);


// setup static folder
 app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use('/api/posts',posts);



//Error Handler
app.use(notFound);
app.use(errorHandler)


app.listen(port, ()=> console.log(`server is running on ${port}`))