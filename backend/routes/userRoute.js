const express = require('express')
const user_route = express()
const userController = require('../controller/userController')

user_route.post('/addBoard', userController.addBoard)
user_route.post('/addList', userController.addList)
user_route.get('/getBoards', userController.getBoards)




module.exports = user_route