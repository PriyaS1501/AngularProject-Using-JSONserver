const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const doctorsRouters = require('./API/router/doctors')
const centresRouters = require('./API/router/centres')
const appointmentsRouter = require('./API/router/appointments')
const mongoose = require("mongoose")
require('dotenv').config
mongoose.connect(process.env.mongoConnection)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(morgan("dev"))

app.use('/doctors', doctorsRouters)
app.use('/centres', centresRouters)
app.use('/appointments', appointmentsRouter)
module.exports = app

