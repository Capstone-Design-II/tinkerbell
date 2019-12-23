<template>
    <router-link class="mdc-list-item" :class="!status ? 'mdc-list-item--disabled' : ''" :to="`/main/meeting/${id}`"
                 tabindex="0">
        <span class="mdc-list-item__text">
            <span class="mdc-list-item__primary-text">{{title}}</span>
            <span class="mdc-list-item__secondary-text">{{desc}}</span>
        </span>
    </router-link>
</template>

<script>
  export default {
    name: 'ScriptDetail',
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      desc: {
        type: String,
        default: '-'
      },
      status: {
        type: Boolean,
        default: true
      },
      id: {
        type: String,
        default: 0
      }
    }
  }
</script>

<style scoped>

</style>