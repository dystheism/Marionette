
'use strict';

import {client} from './websocket/client';
import {userInterface} from './interface/userInterface';

function setupApplication() {
    runSetup();
}
window.setupApplication = setupApplication;

function runSetup() {
    function ready(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }
    ready(function() { // page loaded.
        // Begin Interface setup.
        userInterface.setupUserInterface();

        // Websocket setup.
        client.authentication(function(error, websocket) {
            if (error) throw error;
            client.socket = websocket;
            client.setupSocketListeners();
        });

        console.log('setup complete');
    });
}
