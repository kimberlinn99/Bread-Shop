const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orders: {
        type: Object,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    specialRequest: {
        type: String
    }
})
module.exports = mongoose.model('Order', orderSchema)

