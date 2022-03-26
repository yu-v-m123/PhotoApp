import Axios from "axios"

const state = {
  user: null
}

const geeters = {
  
}

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

const actions = {
  async registers(context, data) {
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  }
}

export default {
  namespaced: true,
  state,
  geeters,
  mutations,
  actions
}