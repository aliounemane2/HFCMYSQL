const electron = require('electron');
// const app = electron.app;
const { app, Menu } = require('electron')


const url = require('url');
const path = require('path');
// var Menu = electron.app;
var myAppMenu, menuTemplate;


const BrowserWindow = electron.BrowserWindow;
var mainWindow;
let win;


function createWindow() {
    // Create the browser window.

    // mainWindow.webContents.openDevTools();
    // mainWindow.loadURL('https://github.com');

   //  win = new BrowserWindow({ width: 800, height: 600, backgroundColor: '#fff' })
	 win = new BrowserWindow({ width: 1500, height: 1000, backgroundColor: '#fff' })


    win.loadURL(url.format({
        pathname: path.join(__dirname, 'pages/forms.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.session.clearCache(function(){console.log('cleared all cookies ');});

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    })


}

app.on('ready', createWindow)