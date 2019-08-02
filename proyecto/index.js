
'use strict';

const electron = require("electron")
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron

let mainWindow;

app.on( 'ready', function() {
    // Create a new Window
    mainWindow = new BrowserWindow({
        webPreferences: {
        nodeIntegration: false
        }
    })
    //load HTML into window
    mainWindow.loadURL( url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }));
});