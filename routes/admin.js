const express = require("express")
const router = express.Router()
const data = require("../data")
const historyData = data.history
const Auth = require('../security/auth')

router.get('/', Auth.isLoggedIn, async (req, res) => {
    let flagged = await historyData.flaggedHistory()
    let unFlagged = await historyData.unflaggedHistory()
    res.render('admin', {user:req.user, flagged: flagged.reverse(), unFlagged: unFlagged.reverse()})
})

module.exports = router
