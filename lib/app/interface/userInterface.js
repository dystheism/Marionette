
'use strict';

import {client} from '../websocket/client';

let UserInterface = function() {
    this.button = {
        login: document.getElementById('login'),
        post: document.getElementById('post')
    }
};

export let userInterface = new UserInterface();
window.userInterface = userInterface;

UserInterface.prototype.setupUserInterface = function setupUserInterface() {
    userInterface = new UserInterface();
    window.userInterface = userInterface;
    userInterface.setupButtons();
};

UserInterface.prototype.setupButtons = function setupButtons() {
    userInterface.button.login.onclick = function() {
        client.socket.emit('login');
    };
    userInterface.button.post.onclick = function() {
        client.socket.emit('post');
    };
};