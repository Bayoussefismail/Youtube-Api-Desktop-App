const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow() {
    const win = new BrowserWindow({
           
            width: 950,
            height: 768,
            frame: false,
            resizable: true,
            scalable: true,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

require('electron-reload')(__dirname, {electron: path.join(__dirname, '.bin', 'electron')
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})