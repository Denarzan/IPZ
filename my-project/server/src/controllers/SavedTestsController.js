const {SavedTest} = require('../models')

module.exports = {
    async index(req, res) { // find all the tests in db by the key and return back just 10 
        try {
            const {testId, userId} = req.query
            const savedtest = await SavedTest.findOne({
                where: {
                    TestId: testId,
                    UserId: userId
                }
            })
            res.send(savedtest)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the tests'
            })
        }
    }
}