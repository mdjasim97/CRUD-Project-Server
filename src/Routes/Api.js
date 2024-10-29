const express = require('express')
const { ProductCreate, ProductsRead, ProductUpdate, ProductDelete } = require('../Controller/ProductController/ProductController')
const router = express.Router()


router.post('/createProduct', ProductCreate)
router.get('/readProduct', ProductsRead)
router.post('/updateProduct/:id', ProductUpdate)
router.get('/deleteProduct/:id', ProductDelete)


module.exports = router