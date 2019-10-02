<template>
  <div class="wrap">
    <input type="text" class="form-control search-field" placeholder="Search user name" v-model="userName">
    <table class="table">
      <thead>
        <tr>
          <th @click="sortName" class="caption" scope="col">Name</th>
          <th @click="sortLocation" class="caption" scope="col">Location</th>
          <th @click="sortCurrency" class="caption" scope="col">Currency (Total: {{calculateUserCurrency}})</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in loadUsers" :key="user.id">
          <td>
            <router-link :to="`/user/${user.id}`">{{user.name}}</router-link>
            <input :class="{ active: user === activeItem}" class="textfield form-control" v-model.trim="user.name" @keydown.esc="hideField" @keypress.enter="changeData(user.id, user.name, user.location, user.currency)">
          </td>
          <td>
            {{user.location}}
            <input :class="{ active: user === activeItem}" class="textfield form-control" v-model.trim="user.location" @keydown.esc="hideField" @keypress.enter="changeData(user.id, user.name, user.location, user.currency)">
          </td>
          <td>
            {{user.currency}}
            <input type="number" :class="{ active: user === activeItem}" class="textfield form-control" v-model.trim="user.currency" @keydown.esc="hideField" @keypress.enter="changeData(user.id, user.name, user.location, user.currency)">
          </td>
          <i @click="showField(user)" class="material-icons icon-edit">edit</i>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      userName: '',
      activeItem: null
    }
  },
  computed: {
    loadUsers() {
      return this.$store.getters.searchUser(this.userName)
    },
    calculateUserCurrency() {
      return this.$store.state.users.reduce((acc, current) => {
        return acc + +current.currency
      }, 0);
    }
  },
  methods: {
    sortName() {
      return this.$store.getters.sortName
    },
    sortLocation() {
      return this.$store.getters.sortLocation
    },
    sortCurrency() {
      return this.$store.getters.sortCurrency
    },
    changeData(id, name, location, currency) {
      if ( (name.length < 3 || name.length > 20) || (location.length < 3 || location.length > 20) || (currency.length < 3 || currency.length > 20) ) {
        alert('Min length 3 symbols, Max length 20 symbols')
      } else {
        this.activeItem = null;
        this.$store.commit('changeData', {
          id,
          name,
          location,
          currency
        })
      }
    },
    showField(user) {
      this.activeItem = user
    },
    hideField() {
      this.activeItem = null
    }
  }
}
</script>

<style scoped>
  .wrap {
    padding: 0 20px;
  }
  .caption {
    cursor: pointer;
  }
  .search-field {
    margin: 30px 0;
  }
  .textfield {
    display: none;
  }
  .active {
    display: block;
  }
  .icon-edit {
    cursor: pointer;
  }
</style>