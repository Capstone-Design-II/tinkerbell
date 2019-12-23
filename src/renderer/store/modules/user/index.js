import { createNamespacedHelpers } from 'vuex'
import { state as stateTypes, mutations as mutationTypes, actions as actionTypes, NAMESPACE } from './types'
import ipc from '../../../ipc'

const state = {
  [stateTypes.ID]: null,
  [stateTypes.NAME]: null
}

const mutations = {
  [mutationTypes.INIT] (state) {
    state[stateTypes.ID] = null
    state[stateTypes.NAME] = null
  },
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
  [actionTypes.LOGIN] (_, {id, password}) {
    return ipc.user.login(id, password)
  }
}

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers(NAMESPACE)
export { mapState, mapGetters, mapMutations, mapActions }

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
