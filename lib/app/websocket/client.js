
'use strict';

import io from 'socket.io-client';

let Client = function() {
    this.status = {
        online : false
    };
    this.socket = null;
};

export let client = new Client();

Client.prototype.setupSocketListeners = function setupSocketListeners() {

};

Client.prototype.authentication = function authentication(config, cb) {
    if (!cb && typeof config === 'function') {
        cb = config;
        config = {};
    }

    // Create websocket and connect.
    let websocket = null;
    console.log(window.origin);
    if (window.origin.includes('chrome-extension')) {
        // Development
        websocket = io.connect('http://127.0.0.1:7779', {
            transports: ['websocket', 'polling']
        });
    } else {
        // Production
        websocket = io.connect('https://psychedelices.com', {
            secure: true,
            port: 80
        });
    }

    websocket.on('connect', function() {

        websocket.on('ready', function(data) {
            console.log('Websocket connected to server...\n');
            return cb(null, websocket);
        });

        websocket.on('client_error', function(data) {
            console.log('[client_error]\n');
            cb(new Error('Authentication Error'));
        });

    });
};
