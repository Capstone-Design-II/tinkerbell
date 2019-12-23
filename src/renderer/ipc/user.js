import { ipcRenderer } from 'electron'
import {REGISTER_USER, LOGIN} from '../../string/ipc'

export const register = (name, id, password, filePath) => {
  return ipcRenderer.invoke(REGISTER_USER, name, id, password, filePath)
}

export const login = (id, password) => {
  return ipcRenderer.invoke(LOGIN, id, password)
}
