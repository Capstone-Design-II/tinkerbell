import { mutations as mutationTypes, actions as actionTypes } from './types'
import ipc from '../../../ipc'

const state = {
  meetingList: null
}

const mutations = {
  [mutationTypes.SET_MEETING_LIST] (state, meetingList) {
    state.meetingList = meetingList
  }
}

const actions = {
  [actionTypes.CREATE_MEETING_NOTE] (_, filePath, members) {
    return ipc.meeting.createMeetingNote(filePath, members)
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

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
