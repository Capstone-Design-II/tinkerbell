import {createNamespacedHelpers} from 'vuex'
import { state as stateTypes, mutations as mutationTypes, actions as actionTypes, NAMESPACE } from './types'
import ipc from '../../../ipc'

const state = {
  [stateTypes.MEETING_LIST]: null
}

const mutations = {
  [mutationTypes.SET_MEETING_LIST] (state, meetingList) {
    state.meetingList = meetingList
  }
}

const actions = {
  [actionTypes.CREATE_MEETING_NOTE] (_, filePath) {
    return ipc.meeting.createMeetingNote(filePath)
  },
  [actionTypes.GET_MEETING_LIST] ({ commit }) {
    return ipc.meeting.getMeetingList()
      .then((data) => {
        commit(data.list)
      })
  },
  [actionTypes.GET_MEETING_NOTE] (_, meetingId) {
    return ipc.meeting.getMeetingNote(meetingId)
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
