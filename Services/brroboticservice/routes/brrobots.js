module.exports = function (app) {
    var api = app.api.brrobots;

    app.route('/BrRobotsService/order')
        .post(api.setBrrobots);
}