import {NAMESPACE, state as stateTypes, mutations as mutationTypes, actions as actionTypes} from './types'
import ipc from '../../../ipc'
import {createNamespacedHelpers} from 'vuex'

const state = {
  [stateTypes.USER_NAME]: '',
  [stateTypes.EMAIL]: '',
  [stateTypes.PASSWORD]: '',
  [stateTypes.VOICE_FILE_PATH]: null
}
const mutations = {
  [mutationTypes.INIT] (state) {
    state[stateTypes.USER_NAME] = ''
    state[stateTypes.EMAIL] = ''
    state[stateTypes.PASSWORD] = ''
    state[stateTypes.VOICE_FILE_PATH] = null
  },
  [mutationTypes.SET_USER_INFO] (state, {name, email, password}) {
    state[stateTypes.USER_NAME] = name
    state[stateTypes.EMAIL] = email
    state[stateTypes.PASSWORD] = password
  },
  [mutationTypes.SET_VOICE_FILE_PATH] (state, filePath) {
    state[stateTypes.VOICE_FILE_PATH] = filePath
  }
}

const actions = {
  [actionTypes.REGISTER] ({ state }) {
    return ipc.user.register(
      state[stateTypes.USER_NAME],
      state[stateTypes.EMAIL],
      state[stateTypes.PASSWORD],
      state[stateTypes.VOICE_FILE_PATH]
    )
  }
}

const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers(NAMESPACE)
export {mapState, mapGetters, mapMutations, mapActions}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
