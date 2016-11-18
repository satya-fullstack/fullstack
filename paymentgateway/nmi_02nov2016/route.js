'use strict';

var Joi = require('joi');
var NMIController = require('./controller.js');

exports.register = function (server, options, next) {
    var nmiController = new NMIController();
    // Declare routes
    server.route([
        {
            method: 'POST',
            path: '/gateway/nmi/doSale',
            config: {
                auth: false,
                tags: ['api'],
                validate: {
                    payload: {
                        //Login Information
                        username: Joi.string(),
                        password: Joi.string(),

                        // Sales Information
                        ccnumber: Joi.string(),
                        ccexp: Joi.string(),
                        amount: Joi.string(),
                        cvv: Joi.string(),

                        // Order Information
                        ipaddress: Joi.string(),
                        orderid: Joi.string(),
                        orderdescription: Joi.string(),
                        tax: Joi.string(),
                        shipping: Joi.string(),
                        ponumber: Joi.string(),

                        // Billing Information
                        firstname: Joi.string(),
                        lastname: Joi.string(),
                        company: Joi.string(),
                        address1: Joi.string(),
                        address2: Joi.string(),
                        city: Joi.string(),
                        state: Joi.string(),
                        zip: Joi.string(),
                        country: Joi.string(),
                        phone: Joi.string(),
                        fax: Joi.string(),
                        email: Joi.string(),
                        website: Joi.string(),

                        // Shipping Information
                        shipping_firstname: Joi.string(),
                        shipping_lastname: Joi.string(),
                        shipping_company: Joi.string(),
                        shipping_address1: Joi.string(),
                        shipping_address2: Joi.string(),
                        shipping_city: Joi.string(),
                        shipping_state: Joi.string(),
                        shipping_zip: Joi.string(),
                        shipping_country: Joi.string(),
                        shipping_email: Joi.string(),
                        type: 'sale'
                    }
                },
                handler: nmiController.sale
            }
        },
    ]);
    next();
};

exports.register.attributes = {
    name: 'routes-NMI',
    version: '1.0.1'
};