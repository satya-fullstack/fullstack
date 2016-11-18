'use strict';
var utils = require('util');
var mapKeys = require('42-cent-util').mapKeys;
var schema = require('./schemas.js');
var Promise = require('bluebird');
var request = require('request');
var post = Promise.promisify(request.post);
var qs = require('query-string');

function NMI (credentials) {
 this.username = credentials.username;
 this.password = credentials.password;
}

NMI.prototype.submitTransaction = function submitTransaction () {
    console.log('test transaction');
    var order = {
        amount: Math.random() * 100 + 1
    };

    var creditCard = {
        creditCardNumber: '4111111111111111',
        expirationYear: '17',
        expirationMonth: '01',
        cvv: '123'
    };
    var prospect = {
        customerFirstName: 'Ellen',
        customerLastName: 'Johson',
        billingAddress: '14 Main Street',
        billingCity: 'Pecan Springs',
        billingZip: '44628',
        billingState: 'TX',
        shippingFirstName: 'China',
        shippingLastName: 'Bayles',
        shippingAddress: '12 Main Street',
        shippingCity: 'Pecan Springs',
        shippingZip: '44628'
    };

    var params = {};
    utils._extend(params, order);
    utils._extend(params, creditCard);
    utils._extend(params, prospect);

    params = mapKeys(params, schema);

    params.username = this.username;
    params.password = this.password;



    var other = {
        'description' : 'sample test 10',
        //'currency' : 'INR',
    }
    utils._extend(params, other);

    params.type = 'sale';
    if (creditCard.expirationMonth && creditCard.expirationYear) {
        params.ccexp = creditCard.expirationMonth.toString() + creditCard.expirationYear.toString();
    }

    return post('https://secure.networkmerchants.com/api/transact.php', {formData: params}).then(function (result) {
        console.log(qs.parse('?' + result[1]));
    });
};

module.exports = NMI;