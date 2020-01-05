var mongoose = require('mongoose');

module.exports = function (app) {
    var api = {};

    api.setBrrobots = function (req, res) {
        var GlobalDiscount=0.04;
        //{"id":"1","name":"Domestic Robot","price":800,"discount":0.07,"quantityfordiscounting":3}
       //{"id":"2","name":"Security Robot","price":1200,"discount":0.14,"quantityfordiscounting":4}
       //{"id":"3","name":"Medical Robot","price":6900,"discount":0.24,"quantityfordiscounting":6}
       //{"id":"4","name":"Solar Reactor","price":4500,"discount":0.15,"quantityfordiscounting":3}
       //{"id":"5","name":"Ark Reactor","price":8001,"discount":0.09,"quantityfordiscounting":3}

        console.log('set Brrobots: ' + JSON.stringify(req.body));
        var information = req.body.products;
        var values = JSON.parse('[{"id":"1","name":"Domestic Robot","price":800,"discount":0.07,"quantityfordiscounting":3},{"id":"2","name":"Security Robot","price":1200,"discount":0.14,"quantityfordiscounting":4},{"id":"3","name":"Medical Robot","price":6900,"discount":0.24,"quantityfordiscounting":6}]')
         // console.log(cost);
       var id=makeid();
       var total_cost=0.0;
       var total_cost_withoutdiscounts=0.0;
       var size=information.length;
       if(size==0) 
       {
        res.status(200).send('{"ordercode":"0","price":"0","discount":"0"}');
        return; 
       }
       var result= [];
       for(var n=0;n<size;n++)
       {
        var error=true;
        for(var i=0;i<values.length;i++)
        {

            if(values[i].id==information[n].id)
            {
                total_cost_withoutdiscounts=total_cost_withoutdiscounts+information[n].quantity*values[i].price;  
                var prices=0;
                error=false;
                if(information[n].quantity>values[i].quantityfordiscounting)
                {                
                    values[i].price=values[i].price*(1-values[i].discount)*(1-GlobalDiscount);
                    prices=information[n].quantity*values[i].price;
                    total_cost=total_cost +prices;

                }
                else
                {

                    prices=information[n].quantity*values[i].price*(1-GlobalDiscount);
                    total_cost=total_cost +prices;

                }
                result.push('{"id":"'+id+'","product":"'+information[n].id+'","quantity":"'+information[n].quantity+'","cost":"'+prices+'"}');
            }
        }
        if(error)
        {
            res.status(500).send('{"code":"500","message":"Product does not exist in our DataBase"}');
            return; 
        }
       }

       for(var i=0;i<size;i++)
       {

        mongoose.model('Order').create(JSON.parse(result[i])).then(function (resp) {

        }, 
        function (error) {
            console.log(error);
            res.status(500).send({ status: error });
            return;
        });
        console.log(result[i])
       }
       var discount=total_cost_withoutdiscounts-total_cost;
       res.status(200).send('{"ordercode":"'+id+'","price":"'+total_cost+'","discount":"'+discount+'"}');





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