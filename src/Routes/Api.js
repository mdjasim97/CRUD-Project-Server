const express = require('express')
const { TestController } = require('../Controller/TestController/TestController')
const router = express.Router()


router.get('/test', TestController)


module.exports = router