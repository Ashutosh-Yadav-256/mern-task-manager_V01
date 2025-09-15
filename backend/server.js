const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON

// --- Database Connection ---
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// --- Routes ---
const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');

app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
