const { app, BrowserWindow } = require('electron')

const path = require('path')


function createWindow() {
    const win = new BrowserWindow({
        show: false
    })
    win.maximize()
    win.show()

    win.loadFile("frontend/index.html")
}

app.whenReady().then(() => {
    createWindow()
})