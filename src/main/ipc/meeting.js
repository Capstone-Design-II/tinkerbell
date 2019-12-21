import { CREATE_MEETING_NOTE, GET_MEETING_LIST, GET_MEETING_NOTE } from '../../string/ipc'
import * as services from '../services'

const createMeetingNote = (ipcMain) => {
  ipcMain.handle(CREATE_MEETING_NOTE, (_, { filePath, members }) => {
    return services.createMeetingNote(filePath, members)
  })
}

const getMeetingList = (ipcMain) => {
  ipcMain.handle(GET_MEETING_LIST, (_) => {
    return services.getMeetingList()
  })
}
const getMeetingNote = (ipcMain) => {
  ipcMain.handle(GET_MEETING_NOTE, (_, id) => {
    return services.getMeetingNote(id)
  })
}

export const registerIpcMain = (ipcMain) => {
  createMeetingNote(ipcMain)
  getMeetingList(ipcMain)
  getMeetingNote(ipcMain)
}
