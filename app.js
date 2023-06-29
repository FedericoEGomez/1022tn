const express = require('express');
const logeer = require('morgan');
const cors = require('cors');
const session = require('express-session');
const cookie = require('cookie-parser')

require('dotenv').config();

const app = express();

app.use(logeer('dev'));
app.use(express.json());
app.use(cors());
app.use(cookie());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));


const {connect} = require('./db/db')

const indexRouter = require('./routers/index')
const apiRouter = require('./routers/api')
const userRouter = require('./routers/user')

app.use('/',indexRouter)
app.use('/v1',apiRouter)
app.use('/user',userRouter)

connect();

module.exports = app

