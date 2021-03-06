/**
 * check if bookmark exists and create or delete it
 * @module BookmarksController
 */

/**
 * connecting User to db
 * @type {any}
 * @const User
 */
/**
 * connecting Test to db
 * @type {any}
 * @const Test
 *
 */
/**
 * connecting Bookmark to db
 * @type {any}
 * @const Bookmark
 *
 */
const {
    Bookmark,
    Test,
    User
} = require('../models')
/**
* try to find bookmark in db. return json object
* @callback index
*
*/
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
/**
* try create new bookmark to the user. return json object
* @callback post
*
*/
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
/**
* try delete bookmark. return json object
* @callback delete
*
*/
    async delete (req, res) {
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
}