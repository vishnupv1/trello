const express = require('express')
const app = express()
const user_route = require('./routes/userRoute')
const { createServer } = require('http')
const PORT = 3000;
const httpServer = createServer(app);
const db = require('./helpers/mongohelper')
app.use('/', user_route)


httpServer.listen(PORT, () => {
    console.log('server started');
})

