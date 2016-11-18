'use strict';
var PaymentGateway = require('./PaymentGateway.js');
var NMI = require('./lib/NMI.js');
function GatewayController() {};

GatewayController.prototype.submitTransaction = function (req, reply) {

    //Retrieve Gateway credentials from DB By Merchand ID

    //TODO : Fetch Gateway Credentials From DB

    var paymentGateway = new PaymentGateway();

    //paymentGateway.customerFirstName = req.payload.customerFirstName;
    //paymentGateway.customerLastName = req.payload.customerLastName;
    //paymentGateway.billingAddress = req.payload.billingAddress;
    //paymentGateway.billingCity = req.payload.billingCity;
    //paymentGateway.billingZip = req.payload.billingZip;
    //paymentGateway.billingState = req.payload.billingState;
    //paymentGateway.shippingFirstName = req.payload.shippingFirstName;
    //paymentGateway.shippingLastName = req.payload.shippingLastName;
    //paymentGateway.shippingAddress = req.payload.shippingAddress;
    //paymentGateway.shippingCity = req.payload.shippingCity;
    //paymentGateway.shippingZip = req.payload.shippingZip;
    //paymentGateway.amount = req.payload.amount;
    //paymentGateway.creditCardNumber = req.payload.creditCardNumber;
    //paymentGateway.expirationYear = req.payload.expirationYear;
    //paymentGateway.expirationMonth = req.payload.expirationMonth;
    //paymentGateway.cvv = req.payload.cvv;

    //console.log(paymentGateway.customerFirstName);


    //TODO:
    var credentials = {
        'username' : 'demo',
        'password' : 'password'
    }
   paymentGateway._submitTransaction(new NMI(credentials),req.payload);


};


GatewayController.prototype.test = function (req, reply) {
    console.log('test');
    //var paymentGateway = new PaymentGateway();
    //paymentGateway.submitTransaction(new NMI());
};

module.exports = GatewayController;