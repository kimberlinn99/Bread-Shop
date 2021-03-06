const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const connectDB = require('./dbConfig/connect_db')

const menuRouter = require('./routes/menu')
const subscribeRouter = require('./routes/subscribe')
const feedbackRouter = require('./routes/feedback')

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/public', express.static('./public'))

connectDB()

app.use('/menu', menuRouter)
app.use('/subscribe', subscribeRouter)
app.use('/contact', feedbackRouter)

app.listen(process.env.PORT || 8081, () => {
    console.log('Server is running on port ' + process.env.PORT || 8081)
})



