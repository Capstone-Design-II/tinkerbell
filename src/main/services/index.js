import * as s3 from '../api/file'
import api from '../api'

export const registerUser = (name, id, password, voiceFilePath) => {
  return s3.uploadUserFile(voiceFilePath, name)
    .then(fileKey => api.registerUser(name, id, password, fileKey))
}

export const login = (id, password) => {
  return Promise.resolve('SUCCESS')
}

export const createMeetingNote = (filePath) => {
  return s3.uploadMeetingFile(filePath)
    .then(fileKey => api.createMeetingNote(fileKey))
}

export const getMeetingList = () => {
  return api.getMeetingList()
}

export const getMeetingNote = (meetingId) => {
  return api.getMeetingNote(meetingId)
}
