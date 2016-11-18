'use strict';

var Joi = require('joi');
var GatewayController = require('./controller.js');

exports.register = function (server, options, next) {
    var gatewayController = new GatewayController();
    // Declare routes
    server.route([
        {
            method: 'POST',
            path: '/gateway/submitTransaction',
            config: {
                auth: false,
                tags: ['api'],
                handler: gatewayController.submitTransaction
            }
        },
    ]);
    next();
};

exports.register.attributes = {
    name: 'routes-Gateway',
    version: '1.0.1'
};