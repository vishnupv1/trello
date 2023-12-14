const mongoose = require('mongoose')
const boardSchema = mongoose.Schema({
    boardname: {
        type: String,
        required: true
    },
    backGroundImage: {
        type: String,
    }
})

module.exports = mongoose.model('Board', boardSchema)
