<template>
    <div class="base-profile">
        <div class='base-profile__image'>
            <img :src="imageSource" class="l-width-full">
        </div>
        <h3 class="mdc-drawer__title">{{ title }}</h3>
        <sub-menu></sub-menu>
    </div>
</template>

<script>
  import SubMenu from './SubMenu'
export default {
    name: 'TheProfile',
    components: {SubMenu},
    props: {
      imageSource: {
        type: String,
        default: 'static/images/tinkerbell-logo-big.png'
      },
      title: {
        type: String,
        default: 'Tinkerbell'
      },
      subTitle: {
        type: String,
        default: 'made by Peterpan'
      }
    }
  }
</script>

<style scoped>
    .base-profile {
        padding-top: 22px;
        padding-bottom: 15px;
    }
.base-profile__image{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 10px 5px;
}
</style>