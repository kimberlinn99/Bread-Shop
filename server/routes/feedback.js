const express = require('express')
const route = express.Router()

const Feedback = require('../models/feedbacks')

route.post('/', async (req, res) => {
    try{
        const newFeedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        await newFeedback.save()
        res.status(201).send({
            message: 'Thanks for the feedback.',
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
    }catch (err){
        res.status(400).send(err)
    }
})

module.exports = route
