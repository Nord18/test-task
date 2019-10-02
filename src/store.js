import Vue from 'vue'
import Vuex from 'vuex'
import db from './db/init'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    getUsers(state, data) {
      for (let key in data) {
        state.users.push(data[key])
      }
    },
    changeData(state, {id, name, location, currency}) {
      db.ref('Users/' + id).set({
        id,
        name,
        location,
        currency
      })
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const response = await fetch('https://test-c13f7.firebaseio.com/Users.json');
        const data = await response.json();
        commit('getUsers', data)
      } catch(err) {
        console.log(err)
      }
    }
  },
  getters: {
    sortName(state) {
      return state.users.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
    },
    sortLocation(state) {
      return state.users.sort((a,b) => {
        return a.location.localeCompare(b.location)
      })
    },
    sortCurrency(state) {
      return state.users.sort((a,b) => {
        return +a.currency - +b.currency
      })
    },
    searchUser: state => name => {
      return state.users.filter(user => {
        return user.name.match(name);
      })
    },
    userItem: state => id => {
      return state.users.filter(user => {
          return user.id == id
      })
    }
  }
})
