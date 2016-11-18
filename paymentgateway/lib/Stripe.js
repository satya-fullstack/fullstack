'use strict';

function Stripe (options) {

}

Stripe.prototype.submitTransaction = function submitTransaction () {
    console.log('test transaction from stripe');

};

module.exports = Stripe;