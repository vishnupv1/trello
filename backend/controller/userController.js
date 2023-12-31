const board = require('../model/boardModel')
const list = require('../model/listModel')
const { v4: uuidv4 } = require('uuid');
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
        if (boardData) {
            const newList = new list({
                listname: name,
                boardname: boardname,
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
const getLists = async (req, res) => {
    try {
        const boardname = req.query.boardname
        const boardData = await board.find({ boardname })
        if (boardData) {
            const listData = await list.find({ boardname: boardname })
            if (listData) {
                return res.status(200).json(listData)
            }
            else {
                return res.status(400).json('Not found')
            }
        } else {
            return res.status(400).json('Not found')
        }
    }
    catch {

    }
}
const getList = async (req, res) => {
    try {
        const listData = await list.find({})
        if (listData) {
            return res.status(200).json(listData)
        } else {
            return res.status(400).json('Not found')
        }
    }
    catch {

    }
}
const addCard = async (req, res) => {
    try {
        const { cardname } = req.body
        const listData = await list.findOne({ listname: req.query.listname })
        if (listData) {
            listData.cards.push({ cardname, id: uuidv4() });

            const updatedData = await listData.save();
            if (updatedData) {
                res.status(200).json(listData)
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
const addCardDrag = async (req, res) => {
    try {
        const { cardId, cardname, listname, listnameToDelete } = req.body;
        const deleteCardListData = await list.findOne({ listname: listnameToDelete });
        if (deleteCardListData) {
            deleteCardListData.cards = deleteCardListData.cards.filter(card => card.id !== cardId);
            const updatedDeleteListData = await deleteCardListData.save();

            if (updatedDeleteListData) {
                const listData = await list.findOne({ listname: listname });

                if (listData) {
                    listData.cards.push({ cardname, id: cardId });

                    const updatedData = await listData.save();

                    if (updatedData) {
                        res.status(200).json(listData);
                    } else {
                        res.status(500).json('Server error');
                    }
                } else {
                    res.status(500).json('Server error');
                }
            } else {
                res.status(500).json('Server error');
            }
        } else {
            res.status(404).json('List not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
};

const getBoard = async (req, res) => {
    try {
        const boardData = await board.find()
        if (boardData) {
            return res.status(200).json(boardData)
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
    getList,
    getLists,
    addCard,
    getBoard,
    addCardDrag
}