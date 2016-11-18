'use strict';

function AuthorizeNet (credentials) {
    //TODO
}

AuthorizeNet.prototype.submitTransaction = function submitTransaction (params) {
    //TODO
    console.log(JSON.stringify(params));
};

module.exports = AuthorizeNet;