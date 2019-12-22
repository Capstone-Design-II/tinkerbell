'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import ipc from './ipc'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const makeSingleInstance = () => {
  app.requestSingleInstanceLock()

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

const loadDemos = () => {
  ipc.user.registerIpcMain(ipcMain)
  ipc.meeting.registerIpcMain(ipcMain)
}

const initialize = () => {
  makeSingleInstance()

  loadDemos()

  function createWindow () {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
      height: 563,
      useContentSize: true,
      width: 1000,
      webPreferences: {
        nodeIntegration: true
      }
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

initialize()

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
