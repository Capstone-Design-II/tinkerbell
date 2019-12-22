<template>
    <div class="main-frame-root">
        <the-menu></the-menu>
        <div class="main-frame-app-content l-position-relative">
            <top-bar class="mdc-top-app-bar__section--align-start"></top-bar>
            <div class="main-frame-app__main-content">
                <div class="mdc-top-app-bar--fixed-adjust"></div>
                <router-view></router-view>
            </div>
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
    .main-frame-app__main-content {
        overflow: auto;
        height: 100%;
        padding: 0 18px;
    }
</style>