import { mutations as mutationTypes, actions as actionTypes } from './types'
import ipc from '../../../ipc'

const state = {
  id: null,
  name: null
}

const mutations = {
  [mutationTypes.SET_ID] (state, id) {
    state.id = id
  },
  [mutationTypes.SET_NAME] (state, name) {
    state.name = name
  },
  [mutationTypes.SET_ALL] (state, name, id) {
    state.name = name
    state.id = name
  }
}

const actions = {
  [actionTypes.REGISTER] (_, name, id, password, filePath) {
    return ipc.user.register(name, id, password, filePath)
  },
  [actionTypes.LOGIN] ({ commit }, id, password) {
    /*
      TODO: register login ipc
     */
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
