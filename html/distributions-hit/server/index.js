const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user');
require('./db');

const app = express();
const PORT = process.env.PORT || 3030;

/*
 * It's always good to separate out each router in its own file and include it using the app.use method. 
 * This avoids making the code larger by writing it in a single file.
 */

// As we're sending the data to register from React app to Node.js server in JSON format
app.use(express.json());
app.use(cors());
// we've provided userRouter as a middleware for the Express app so that we can make API requests to it.
app.use(userRouter);

app.get('/', (req, res) => {
    res.send('<h2>This is from index.js file</h2>');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});