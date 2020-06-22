const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Grid = require('gridfs-stream');
const app = express()

const menuRouter = require('./routes/menu')
const subscribeRouter = require('./routes/subscribe')
const feedbackRouter = require('./routes/feedback')

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/public', express.static('./public'))

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error.'))
db.once('open', () => { 
    console.log('Database is running..') 
})

app.use('/menu', menuRouter)
app.use('/subscribe', subscribeRouter)
app.use('/contact', feedbackRouter)

app.listen(process.env.PORT || 8081, () => {
    console.log('Server is running on port ' + process.env.PORT || 8081)
})