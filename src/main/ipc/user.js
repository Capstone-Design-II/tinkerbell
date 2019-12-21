import {REGISTER_USER} from '../../string/ipc'
import * as services from '../services'

const registerUser = (ipcMain) => {
  ipcMain.handle(REGISTER_USER, (event, {name, id, password, voiceFilePath}) => {
    return services.registerUser(name, id, password, voiceFilePath)
  })
}

const registerVoice = (_) => {}

export const registerIpcMain = (ipcMain) => {
  registerUser(ipcMain)
  registerVoice(ipcMain)
}
