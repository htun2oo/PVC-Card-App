const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 720,
    frame: false,           // OS Standard Frame (Title Bar, File/Edit/View Menu) ကို လုံးဝဖယ်ထုတ်ခြင်း
    autoHideMenuBar: true,  // Menu Bar ကို ဖျောက်ခြင်း
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.setMenu(null);  // Menu ကို လုံးဝဖျက်ထုတ်ခြင်း
  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
