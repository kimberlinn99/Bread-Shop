const mongoose = require('mongoose')

const URI = process.env.DB_URI || "mongodb+srv://alisa:breaddb@bread-shop.ayfu3.mongodb.net/bread-shop?retryWrites=true&w=majority"
console.log(URI)

const connectDB = async () => {
    try{
        await mongoose.connect(URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('Database connected...')
    } catch(err){
        console.log(err)
    }
}

module.exports = connectDB