<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userItem" :key="user.id">
          <td>
            {{user.name}}
          </td>
          <td>
            {{user.location}}
          </td>
          <td>
            {{user.currency}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  computed: {
    userItem() {
      return this.$store.getters.userItem(this.id)
    }
  }
};
</script>