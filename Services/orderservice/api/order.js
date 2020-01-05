var mongoose = require('mongoose');

module.exports = function (app) {
    var api = {};

    api.setOrder= function (req, res) {
        console.log('set NewTec order: ' + JSON.stringify(req.body));
        var information = req.body.products;
       var id=makeid();
    
        var information=req.body;
        //information.id=id;
        mongoose.model('Save').create(information).then(function (resp) {

          res.status(200).send(resp);
          return; 

        }, 
        function (error) {
            console.log(error);
            res.status(500).send({ status: error });
            return;
        });







        /*
  */
    }
    return api;
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 20; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}