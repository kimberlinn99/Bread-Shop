const express = require('express')
const route = express.Router()
const multer = require('multer')

const Bagel = require('../models/bagel')
const Bread = require('../models/bread')
const Order = require('../models/orders')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        // Window doesn't support ":" in the filename
        // That's why we cannot use "new Date().toISOString()"
        cb(null, Date.now() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true)
    } else {
      cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 3
    }
})

// Get all menus
route.get('/', async (req, res) => {
    try{
        const bagels = await Bagel.find()
        const breads = await Bread.find()
        res.status(200).send({
            bagels: bagels, 
            breads: breads, 
        })
    } catch {
        res.status(500).send({
            message: 'Fail to get all bagels'
        })
    }
})

// Upload new menu into the database
route.post('/', upload.single('menuImage'), async (req, res) => {
    try {
        const request = {
            name: req.body.name,
            price: req.body.price,
            menuImage: req.file.path
        }
        if(req.body.menuType == 'bagel'){
            const bagel = new Bagel( request )
            await bagel.save()
        }else if(req.body.menuType == 'bread'){
            const bread = new Bread( request )
            await bread.save()
        }
        res.status(201).send({
            message: 'Store this menu in the database succesfully.',
            menu: {
                name: req.body.name,
                price: req.body.price,
                menuType: req.body.menuType,
                menuImage: req.file.path
            }
        })
    } catch (err){
        res.status(400).send(err)
    }
})

// Update orders in the database
route.post('/order', async (req, res) => {
    try{
        const order = new Order({
            orders: req.body.order,
            totalPrice: req.body.totalPrice,
            specialRequest: req.body.specialRequest
        })
        await order.save()
        res.status(201).send({
            message: 'The order has been sent succesfully',
            order: req.body.order,
            totalPrice: req.body.totalPrice,
            specialRequest: req.body.specialRequest
        })
    }catch (err){
        res.status(400).send(err)
    }
})

module.exports = route

