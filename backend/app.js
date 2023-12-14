const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const user_route = require('./routes/userRoute')
const { createServer } = require('http')
const PORT = 3000;
const httpServer = createServer(app);
const db = require('./helpers/mongohelper')
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
},
));
app.use('/', user_route)




httpServer.listen(PORT, () => {
    console.log('server started');
})

