const express = require('express')
const route = express.Router()

const Subscribe = require('../models/subscribes')

route.post('/', async (req, res) => {
    try{
        const subscriber = await Subscribe.findOne({ email: req.body.email })
        if(subscriber){
            res.status(400).send({
                message: 'You have already subscribed our shop'
            })
        }else{
            const newSubscriber = new Subscribe({
                email: req.body.email
            })
            await newSubscriber.save()
            res.status(201).send({
                message: 'Thanks for subscribing our shop.',
                email: req.body.email
            })
        }
    }catch (err){
        res.status(400).send(err)
    }
})

module.exports = route
