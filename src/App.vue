<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>