import { uploadMeetingFile, uploadUserFile } from '../api/file'
import api from '../api'

export const registerUser = (name, id, password, voiceFilePath) => {
  return uploadUserFile(voiceFilePath, name).then((fileKey) => {
    return api.registerUser(name, id, password, fileKey)
  })
}

export const createMeetingNote = (filePath) => {
  return uploadMeetingFile(filePath).then((fileKey) => {
    return api.createMeetingNote(fileKey)
  })
}

export const registerUserVoice = (filePath) => {
  return uploadUserFile(filePath).then((fileKey) => {
    // request to Server
  })
}

export const getMeetingList = () => {
}

export const getMeetingNote = (meetingId) => {
  return api.getMeetingNote(meetingId)
}
