const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const indexRoutes = require('./routes/Index.js')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors());
app.use(express.json())
app.use(cookieParser())


app.use('/admin', indexRoutes)

app.get('/', (req, res) => {
    res.send('Hello from backend')
})

// Setting up server
const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`))

// Connecting to mongoDB
const CONNECTION_URL = 'mongodb+srv://sahad:sahad@cluster0.gwmoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// 'mongodb://localhost:27017/'
mongoose.connect( CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) return console.error(err);
    console.log("Connected to MongoDB")
})