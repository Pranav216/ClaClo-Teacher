require('dotenv').config();

const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// Database Connection
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Registering Routes
const teacherRoutes = require('./src/routes/teacher.route');
const classRoutes = require('./src/routes/class.route');
const materialRoutes = require('./src/routes/materials.route');
const assessmentRoutes = require('./src/routes/assessment.route');
const indexRoutes = require("./src/routes/index.route")

app.use('/api/teacher', teacherRoutes)
app.use('/api/class', classRoutes)
app.use('/api/materials', materialRoutes)
app.use('/api/assessments', assessmentRoutes)
app.use('/', indexRoutes)

app.use(express.json());
app.set('trust proxy', true);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})