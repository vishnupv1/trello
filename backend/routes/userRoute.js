const express = require('express')
const user_route = express()
const userController = require('../controller/userController')

user_route.get('/', userController.getHome)


module.exports = user_route