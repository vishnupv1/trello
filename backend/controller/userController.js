const getHome = async (req, res) => {
    try {
        res.status(200).json('getting')
    } catch (err) {
        res.status(500).json('server error')
    }
}


module.exports = {
    getHome
}