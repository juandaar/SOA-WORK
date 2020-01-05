module.exports = function (app) {
    var api = app.api.order;

    app.route('/NewTec/order/saves')
        .post(api.setOrder);
}