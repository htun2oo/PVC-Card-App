const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,            // OS Standard Frame (Title Bar, Menu Bar) တစ်ခုလုံးကို ဖယ်ထုတ်မည်
    autoHideMenuBar: true,   // Menu Bar ကို လုံးဝဖျောက်မည်
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
