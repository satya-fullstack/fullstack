'use strict';
var PaymentGateway = require('./PaymentGateway.js');
var NMI = require('./lib/NMI.js');
function GatewayController() {};

GatewayController.prototype.submitTransaction = function (req, reply) {

    //TODO : Fetch Gateway Credentials From DB by Merchand ID

    var paymentGateway = new PaymentGateway();

    //TODO:
    var credentials = {
        'username' : 'demo',
        'password' : 'password'
    }

    //TODO: Dynamic initialization for XXX(credentials) configured gateway
   paymentGateway._submitTransaction(new NMI(credentials),req.payload);
};

module.exports = GatewayController;