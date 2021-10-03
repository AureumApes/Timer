const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        show: false
    })
    win.maximize()
    win.show()

    win.loadFile("frontend/index.html").then()
}

app.whenReady().then(() => {
    createWindow()
})