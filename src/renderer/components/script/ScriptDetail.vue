<template>
    <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
                <span class="mdc-typography--subtitle1">{{item.title}}</span>
                <span class="mdc-list-item__secondary-text">{{item.desc}}</span>
            </span>
    </li>
</template>

<script>
  export default {
    name: 'ScriptDetail',
    props: {
      item: {
        type: Object,
        default: {
          title: 'Title',
          desc: 'This is empty meeting'
        }
      }
    }
  }
</script>

<style scoped>

</style>