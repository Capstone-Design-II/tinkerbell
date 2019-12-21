<template>
    <the-menu></the-menu>
</template>

<script>
  import BaseMenuItem from '../components/menu/BaseMenuItem'
  import BaseProfile from '../components/menu/TheProfile'
  import TheMenu from '../components/menu/TheMenu'
export default {
    name: 'Login',
    components: {TheMenu, BaseProfile, BaseMenuItem}
  }
</script>

<style scoped>

</style>