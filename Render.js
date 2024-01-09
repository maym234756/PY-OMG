const { ipcRenderer } = require('electron');
// Example: On a button click
document.getElementById('updateButton').addEventListener('click', () => {
  ipcRenderer.send('check-for-update');
});

ipcRenderer.on('update-available', (event, arg) => {
    // Logic to handle the update available response
    // For example, update the UI to show update details
  });
  
  ipcRenderer.on('update-available', () => {
    // Logic to update the UI, like showing a notification
  });
  
  ipcRenderer.on('update-available', () => {
    // Update your UI to show that an update is available
  });
  
  ipcRenderer.on('update-not-available', () => {
    // Update your UI to show that no update is available
  });
  