import { createNamespacedHelpers } from 'vuex'
import { mutations as mutationTypes, actions as actionTypes, NAMESPACE } from './types'
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
  [mutationTypes.SET_ALL] (state, { name, id }) {
    state.name = name
    state.id = id
  }
}

const actions = {
  [actionTypes.REGISTER] (_, { name, id, password, filePath }) {
    return ipc.user.register(name, id, password, filePath)
  },
  [actionTypes.LOGIN] ({ commit }, {id, password}) {
    console.log('HI HI')
    console.log('HI HI')
    console.log('HI HI')
    return ipc.user.login(id, password)
  }
}

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)
export { mapState, mapGetters, mapActions }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
