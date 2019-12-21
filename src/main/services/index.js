import { uploadMeetingFile, uploadUserFile } from '../api/file'
import api from '../api'

export const registerUser = (name, id, password, voiceFilePath) => {
  return uploadUserFile(voiceFilePath, name).then((fileKey) => {
    return api.registerUser(name, id, password, fileKey)
  })
}

export const createMeetingNote = (filePath, members) => {
  return uploadMeetingFile(filePath)
    .then((fileKey) => api.createMeetingNote(fileKey, members))
}

export const getMeetingList = (userId) => {
  return api.getMeetingList(userId)
}

export const getMeetingNote = (meetingId) => {
  return api.getMeetingNote(meetingId)
}
