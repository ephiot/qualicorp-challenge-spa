import axios from 'axios'

const URL = process.env.API_URL || 'https://immense-tundra-69382.herokuapp.com'

export function getUsers ({ commit }) {
  axios.get(`${URL}/users`)
    .then(response => {
      commit('SET_USERS', response.data)
    })
}

export function deleteUser ({ commit }, id) {
  axios.delete(`${URL}/users/${id}`)
    .then(response => {
      // commit('SET_USERS', response.data)
    })
}
