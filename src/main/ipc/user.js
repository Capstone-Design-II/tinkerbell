import {REGISTER_USER, LOGIN} from '../../string/ipc'
import * as services from '../services'

const registerUser = (ipcMain) => {
  ipcMain.handle(REGISTER_USER, (_, {name, id, password, voiceFilePath}) => {
    return services.registerUser(name, id, password, voiceFilePath)
  })
}

const registerVoice = () => {}
const login = (ipcMain) => {
  ipcMain.handle(LOGIN, (_, id, password) => {
    return services.login(id, password)
  })
}

export const registerIpcMain = (ipcMain) => {
  registerUser(ipcMain)
  registerVoice(ipcMain)
  login(ipcMain)
}
