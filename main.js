const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "PVC Card Studio & Product Builder",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load index.html
  win.loadFile('index.html');
  
  // Menu bar ဖျောက်လိုပါက အောက်ပါလိုင်းကို ဖွင့်ပါ
  // win.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
