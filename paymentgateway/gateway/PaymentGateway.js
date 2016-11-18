'use strict';
var Stripe = require('./lib/Stripe.js');
var NMI = require('./lib/NMI.js');

class PaymentGateway{
}

/**
 * Authorize and capture a transaction
 * @param supportedGateway
 * @param payload
 */
PaymentGateway.prototype._submitTransaction = function submitTransaction (supportedGateway,payload) {
    var response = supportedGateway.submitTransaction(payload);
};

/**
 * Void a non-settled transaction
 * @param supportedGateway
 */
PaymentGateway.prototype.voidTransaction = function voidTransaction (supportedGateway) {

};

/**
 * Refund (or credit) a settled transaction.
 * @param supportedGateway
 */
PaymentGateway.prototype.refundTransaction = function refundTransaction (supportedGateway) {

};

//TODO : Handle other types of transactions

module.exports = PaymentGateway;