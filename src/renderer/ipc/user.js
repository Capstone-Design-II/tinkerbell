import { ipcRenderer } from 'electron'
import {REGISTER_USER} from '../../string/ipc'

export const register = (name, id, password, filePath) => {
  return ipcRenderer.invoke(REGISTER_USER, { name, id, password, filePath })
}
