const mongoose = require('mongoose')
const listSchema = mongoose.Schema({
    listname: {
        type: String,
        required: true
    },
    cards: {
        type: Array,
    },
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    boardname: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('List', listSchema)
