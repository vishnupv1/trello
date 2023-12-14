const board = require('../model/boardModel')
const list = require('../model/listModel')
const addBoard = async (req, res) => {
    try {
        const { name } = req.body
        const newBoard = new board({
            boardname: name
        })
        const boardData = await newBoard.save();
        if (boardData) {
            res.status(200).json(boardData.boardname)
        } else {
            res.status(500).json('server error')
        }
    } catch (err) {
        res.status(500).json('server error')
    }
}
const getBoards = async (req, res) => {
    try {
        const boardname = req.query.boardname
        const boardData = await board.findOne({ boardname })
        if (boardData) {
            return res.status(200).json(boardData.boardname)
        } else {
            return res.status(400).json('Not found')
        }
    }
    catch {

    }
}
const addList = async (req, res) => {
    try {
        const { name, boardname } = req.body
        const boardData = await board.findOne({ boardname: boardname })
        console.log(boardData);
        if (boardData) {
            const newList = new list({
                listname: name,
                boardId: boardData._id
            })
            const ListData = await newList.save();
            if (ListData) {
                res.status(200).json(ListData.listname)
            } else {
                res.status(500).json('server error')
            }
        } else {
            res.status(500).json('server error')
        }
    } catch (err) {
        res.status(500).json('server error')
    }
}
const getList = async (req, res) => {
    try {
        const boardname = req.query.boardname
        const listData = await board.find({ boardname })
        if (boardData) {
            return res.status(200).json(listData)
        } else {
            return res.status(400).json('Not found')
        }
    }
    catch {

    }
}
module.exports = {
    addBoard,
    getBoards,
    addList,
    getList
}