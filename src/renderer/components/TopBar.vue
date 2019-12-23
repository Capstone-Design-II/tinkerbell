<template>
    <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a @click="$router.go(-1)" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">arrow_back</a>
                <span class="mdc-top-app-bar__title">{{title}}</span>
            </section>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'TopBar',
    props: {
      title: {
        type: String,
        default: 'Title'
      }
    }
  }
</script>

<style scoped>

</style>