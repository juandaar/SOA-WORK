module.exports = function (app) {
    var api = app.api.stark;

    app.route('/StarkService/order')
        .post(api.setStark);
}