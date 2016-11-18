'use strict';
var Stripe = require('./lib/Stripe.js');
var NMI = require('./lib/NMI.js');

class BaseGateway
{
    submitTransaction(obj)
    {
        obj.testTransaction();
        //obj.print();
        console.log('BaseGateway class');
    }
}
;


var b = new BaseGateway();
b.submitTransaction(new NMI());


