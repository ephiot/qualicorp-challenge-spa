import axios from 'axios'

const URL = 'https://immense-tundra-69382.herokuapp.com'

export function getUsers ({ commit }) {
  axios.get(`${URL}/users`)
    .then(response => {
      commit('SET_USERS', response.data)
    })
}

export function storeUser ({ commit, dispatch }, data) {
  axios.post(`${URL}/users`, data)
    .then(response => {
      dispatch('getUsers')
    })
}

export function updateUser ({ commit, dispatch }, data) {
  axios.put(`${URL}/users/${data.id}`, data)
    .then(response => {
      dispatch('getUsers')
    })
}

export function deleteUser ({ commit, dispatch }, id) {
  axios.delete(`${URL}/users/${id}`)
    .then((response, status) => {
      dispatch('getUsers')
    })
}
