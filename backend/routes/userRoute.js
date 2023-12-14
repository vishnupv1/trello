const express = require('express')
const user_route = express()
const userController = require('../controller/userController')

user_route.post('/addBoard', userController.addBoard)
user_route.post('/addList', userController.addList)
user_route.post('/addCard', userController.addCard)
user_route.post('/addCardDrag', userController.addCardDrag)
user_route.get('/getBoards', userController.getBoards)
user_route.get('/getLists', userController.getLists)
user_route.get('/getList', userController.getList)
user_route.get('/getBoard', userController.getBoard)





module.exports = user_route