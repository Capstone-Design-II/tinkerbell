<template>
        <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
                <span class="mdc-typography--subtitle1">{{items.title}}</span>
                <span class="mdc-list-item__secondary-text">{{items.desc}}</span>
            </span>
        </li>
</template>

<script>
    export default {
      name: 'ScriptDetail',
      props: {
        items: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>

</style>