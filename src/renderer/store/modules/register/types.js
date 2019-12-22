export const NAMESPACE = 'register'

const USER_NAME = 'name'
const EMAIL = 'email'
const PASSWORD = 'password'
const VOICE_FILE_PATH = 'voiceFilePath'

export const state = {
  USER_NAME,
  EMAIL,
  PASSWORD,
  VOICE_FILE_PATH
}

const GET_USER_NAME = 'getName'
const GET_EMAIL = 'getEmail'
const GET_PASSWORD = 'getPassword'

export const getters = {
  GET_USER_NAME,
  GET_EMAIL,
  GET_PASSWORD
}

const INIT = 'init'
const SET_USER_INFO = 'setUserInfo'
const SET_VOICE_FILE_PATH = 'setVoiceFilePath'

export const mutations = {
  INIT,
  SET_USER_INFO,
  SET_VOICE_FILE_PATH
}

const REGISTER = 'register'

export const actions = {
  REGISTER
}
