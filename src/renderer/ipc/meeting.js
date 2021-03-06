import {ipcRenderer} from 'electron'
import { CREATE_MEETING_NOTE, GET_MEETING_LIST, GET_MEETING_NOTE } from '../../string/ipc'

export const createMeetingNote = (filePath) => {
  return ipcRenderer.invoke(CREATE_MEETING_NOTE, filePath)
}

export const getMeetingList = () => {
  return ipcRenderer.invoke(GET_MEETING_LIST)
}

export const getMeetingNote = (meetingId) => {
  return ipcRenderer.invoke(GET_MEETING_NOTE, meetingId)
}
