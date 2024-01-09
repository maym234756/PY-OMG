const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { autoUpdater } = require("electron-updater");

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 2000,
    height: 1500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // if you have a preload script
      nodeIntegration: true,
      contextIsolation: false, // change to true if you're using preload scripts and communicate via IPC
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

autoUpdater.checkForUpdatesAndNotify();

autoUpdater.on('update-available', () => {
  // Logic to handle update availability
  // You can send a message to your renderer process here
});

autoUpdater.on('update-not-available', () => {
  // Logic to handle when update is not available
});

autoUpdater.on('error', (err) => {
  // Logic to handle errors
});

autoUpdater.on('update-downloaded', () => {
  // Logic to handle downloaded update
  // You can quit and install the update here
});

ipcMain.on('check-for-update', (event, arg) => {
  // Logic to check for updates
  // You can use `event.sender.send` to reply back
});
