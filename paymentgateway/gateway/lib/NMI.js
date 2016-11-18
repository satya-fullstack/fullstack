'use strict';
var utils = require('util');
var mapKeys = require('42-cent-util').mapKeys;
var schema = require('./schemas.js');
var Promise = require('bluebird');
var request = require('request');
var post = Promise.promisify(request.post);
var qs = require('query-string');

function NMI(credentials) {
    this.username = credentials.username;
    this.password = credentials.password;
}

NMI.prototype.submitTransaction = function submitTransaction(params) {

    console.log(JSON.stringify(params));

    var order = {
        amount: params.amount
    };

    var creditCard = {
        creditCardNumber: params.creditCardNumber,
        expirationYear: params.expirationYear,
        expirationMonth: params.expirationMonth,
        cvv: params.cvv
    };
    var prospect = {
        customerFirstName: params.customerFirstName,
        customerLastName: params.customerLastName,
        billingAddress: params.billingAddress,
        billingCity: params.billingCity,
        billingZip: params.billingZip,
        billingState: params.billingState,
        shippingFirstName: params.shippingFirstName,
        shippingLastName: params.shippingLastName,
        shippingAddress: params.shippingAddress,
        shippingCity: params.shippingCity,
        shippingZip: params.shippingZip
    };

    var other = {
        'description': params.description
    }

    var params = {};
    utils._extend(params, order);
    utils._extend(params, creditCard);
    utils._extend(params, prospect);
    utils._extend(params, other);

    params = mapKeys(params, schema);
    params.username = this.username;
    params.password = this.password;
    params.type = 'sale';

    if (creditCard.expirationMonth && creditCard.expirationYear) {
        params.ccexp = creditCard.expirationMonth.toString() + creditCard.expirationYear.toString();
    }

    return post('https://secure.networkmerchants.com/api/transact.php', {formData: params}).then(function (result) {
        console.log(qs.parse('?' + result[1]));
    });
};

module.exports = NMI;