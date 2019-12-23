<template>
    <div class="main-frame-root">
        <the-menu></the-menu>
        <div class="main-frame-app-content l-position-relative">
            <top-bar class="main-frame__top-bar mdc-top-app-bar__section--align-start" :title="title"></top-bar>
            <div class="main-frame-app__main-content">
                <div class="mdc-top-app-bar--fixed-adjust"></div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import * as R from 'ramda'
  import TheMenu from '../components/menu/TheMenu'
  import TopBar from '../components/TopBar'

  export default {
    name: 'MainFrame',
    components: {TopBar, TheMenu},
    computed: {
      title () {
        return R.ifElse(
          R.isNil,
          R.always(''),
          R.pipe(
            R.adjust(0, R.toUpper),
            R.join('')
          ))(this.$route.name)
      }
    }
  }
</script>

<style scoped>
    .main-frame-root {
        display: flex;
        height: 100vh;
    }
    .main-frame__top-bar {
        position: absolute;
    }

    .main-frame-app-content {
        width: 100%;
    }

    .main-frame-app__main-content {
        overflow: auto;
        height: 100%;
        padding: 0 18px;
    }
</style>