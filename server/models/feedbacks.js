const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
})
module.exports = mongoose.model('Feedback', feedbackSchema)
