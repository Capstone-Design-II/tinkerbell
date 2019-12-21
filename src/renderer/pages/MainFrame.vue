<template>
    <div class="main-frame-root">
        <the-menu></the-menu>
        <div class="main-frame-app-content l-position-relative">
            <top-bar></top-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import TheMenu from '../components/menu/TheMenu'
  import TopBar from '../components/TopBar'
export default {
    name: 'MainFrame',
    components: {TopBar, TheMenu}
  }
</script>

<style scoped>
.main-frame-root{
    display: flex;
    height: 100vh;
}
</style>