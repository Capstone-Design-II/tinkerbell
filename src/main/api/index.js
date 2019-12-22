import _axios from 'axios'
import * as R from 'ramda'
import { BASE_URL } from '../../../config/config'

const axios = _axios.create({
  baseURL: BASE_URL
})

const registerUser = (name, id, password, voiceFileKey) => {
  return axios.post('/register', {
    id, name, password, key: voiceFileKey
  }).then(R.prop('data'))
}

const login = (id, password) => {
  /*
    TODO: add login rest api
   */
}

const getMeetingNote = (meetingId) => {
  return axios.get(`/result/${meetingId}`)
    .then(R.prop('data'))
}

const getMeetingList = () => {
  return axios.get(`/result`)
    .then(R.prop('data'))
}

const createMeetingNote = (fileKey) => {
  return axios.post(`/note`, {
    key: fileKey
  }).then(R.prop('data'))
}

export default {
  registerUser,
  login,
  createMeetingNote,
  getMeetingList,
  getMeetingNote
}
