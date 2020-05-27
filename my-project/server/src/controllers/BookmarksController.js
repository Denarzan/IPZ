const {
    Bookmark,
    Test,
    User
} = require('../models')

const _ = require('lodash')
module.exports = {
    async index(req, res) { 
        try {
            const {testId, userId} = req.query
            const where = {
              UserId: userId
            }
            if (testId) {
              where.TestId = testId
            }
            const bookmarks = await Bookmark.findAll({
              where: where,
              incude: [
                {
                  model: Test
                }
              ]
            })
            .map(bookmark => bookmark.toJSON())
            .map(bookmark => _.extend({
              bookmarkId: bookmark.id
            }, bookmark.Test))
            res.send(bookmarks)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the tests'
            })
        }
    },
    async post (req, res) {  
        try {
            const {testId, userId} = req.body
            const bookmark = await Bookmark.findOne({
                where: {
                    TestId: testId,
                    UserId: userId
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: 'You already have this set as a bookmark'
                })
            }
            const newBookmark = await Bookmark.create({
                TestId: testId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to save the test'
            })
        }
    },
    async delete (req, res) { // find all the tests in db by the key and return back just 10 
        try {
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findOne({
                where: {
                    id: bookmarkId
                }
            })
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete the bookmark'
            })
        }
    }
}//      const test = await Test.findOne({
//where: {
 //   id: req.params.testId
//}