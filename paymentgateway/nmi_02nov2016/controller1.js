'use strict';
var mapKeys = require('42-cent-util').mapKeys;
var schema = require('./schemas.js');
var Promise = require('bluebird');
var request = require('request');
const querystring = require('querystring');

function NMIController() {};

//[POST] /gateway/nmi/doSale
NMIController.prototype.sale = function (req, reply) {
    var mapKeyData = mapKeys(req.payload, schema);
    var postData = querystring.stringify(mapKeyData);
    var post = Promise.promisify(request.post);

    return post('https://secure.networkmerchants.com/api/transact.php', {formData: postData}).then(function (result) {
        //TODO : Validating the response from server
        console.log(result);
    });
};

//[POST] /gateway/nmi/doAuth
NMIController.prototype.auth = function (req, reply) {
    //TODO: Auth
};


//[POST] /gateway/nmi/doCredit
NMIController.prototype.credit = function (req, reply) {
    //TODO : Credit
};

//[POST] /gateway/nmi/doAuth
NMIController.prototype.auth = function (req, reply) {
    //TODO:"  Auth
};

//[POST] /gateway/nmi/doCapture
NMIController.prototype.capture = function (req, reply) {
    //TODO:" Capture
};

//[POST] /gateway/nmi/doOffline
NMIController.prototype.offline = function (req, reply) {
    //TODO:" Offline
};

//[POST] /gateway/nmi/doVoid
NMIController.prototype.void = function (req, reply) {
    //TODO:"  Void
};

//[POST] /gateway/nmi/doRefund
NMIController.prototype.refund = function (req, reply) {
    //TODO:"  Refund
};

module.exports = NMIController;