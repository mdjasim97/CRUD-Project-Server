// Application configuration

const express = require('express');
const router = require('./src/Routes/Api');
const app = new express()

const connectDb = require('./src/Utility/MongoDb/connectDB');


// Security middleware npm packages import
const cors = require('cors')
const helmet = require('helmet')
const rateLimiter = require('express-rate-limit')
const hpp = require('hpp')
const xssClean = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')


// Security middleware Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
    ],
    credentials: true,
}


const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,  // Limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});


// security middleware implementation 
app.use(cors(corsOptions))
app.use(helmet())
app.use(hpp())
app.use(xssClean())
app.use(mongoSanitize())
app.use(limiter)


app.use(express.json())


// mongodb connect configurations
connectDb()

// manage front end routing
// app.use(express.static('crud-project-client/build'))
// app.get('*', function(req, res){
//     req.sendFile(path.resolve(__dirname, 'crud-project-client', 'build', 'index.html'))
// })

// manage application backend route
app.use('/', router)


// application configuration file export 
module.exports = app