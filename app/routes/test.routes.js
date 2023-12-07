module.exports = app => {
    const testController = require('../controllers/test.controller')

    app.route('/test')
        .post(testController.create)
        .get(testController.read)

    app.route('/test/:id')
        .put(testController.update)
        .delete(testController.delete)
        .get(testController.readById)
}