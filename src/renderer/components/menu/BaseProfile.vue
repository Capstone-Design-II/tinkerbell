<template>
    <div class="base-profile">
        <div class='base-profile__image'>
            <img :src="imageSource" class="l-width-full">
        </div>
        <h3 class="mdc-drawer__title">{{ title }}</h3>
        <h6 class="mdc-drawer__subtitle">
            {{ subTitle }}
            <span name="sub-menu"></span>
        </h6>
    </div>
</template>

<script>
  export default {
    name: 'BaseProfile',
    props: {
      imageSource: {
        type: String,
        default: 'static/images/peterpan-128.png'
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
    }
.base-profile__image{
    width: 48px;
    height: 48px;
    border-radius: 50%
}
</style>