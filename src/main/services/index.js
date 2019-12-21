import * as s3 from '../api/file'
import api from '../api'

export const registerUser = (name, id, password, voiceFilePath) => {
  return s3.uploadUserFile(voiceFilePath, name)
    .then((fileKey) => api.registerUser(name, id, password, fileKey))
}

export const login = (id, password) => {
  return api.login(id, password)
}

export const createMeetingNote = (filePath, members) => {
  return s3.uploadMeetingFile(filePath)
    .then((fileKey) => api.createMeetingNote(fileKey, members))
}

export const getMeetingList = (userId) => {
  return api.getMeetingList(userId)
}

export const getMeetingNote = (meetingId) => {
  return api.getMeetingNote(meetingId)
}
