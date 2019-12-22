<template>
    <router-link :to="href" :class="['mdc-list-item', isActive ? 'mdc-list-item--activated': '']" aria-current="page">
        <slot name="icon"></slot>
        <span class="mdc-list-item__text">{{ text }}</span>
    </router-link>
</template>

<script>
  export default {
    name: 'BaseMenuItem',
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: '#'
      },
      text: {
        type: String,
        default: 'Menu'
      }
    }
  }
</script>

<style scoped>

</style>