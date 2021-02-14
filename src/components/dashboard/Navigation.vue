<template>
  <div>
    <div class="vertical-menu">
      <router-link to="/home">Home </router-link>
      <router-link to="/report">Report </router-link>
      <router-link to="/action_items">Action Items </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style>
 .vertical-menu a {
    display: block;
    padding: 12px;
    text-decoration: none;
  }
</style>