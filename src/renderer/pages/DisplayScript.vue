<template>
    <div class="background">
        <h1 class="mdc-typography--subtitle1">{{group}}</h1>
        <p class="mdc-typography--body1">{{title}}</p>
        <span class="mdc-typography--caption" style="color: #A4A4A4">{{desc}}</span>
        <ul class="mdc-list">
            <li class="mdc-list-divider" role="separator"></li>
        </ul>
        <div>
            <p class="mdc-typography--body2">{{script}}</p>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'DisplayScript',
      data () {
        return {
          group: 'Group',
          title: 'Title',
          desc: 'Desc',
          script: 'Script'
        }
      }
    }
</script>

<style scoped>
    .background {
        width: 1000px;
        height: 1000px;
    }
</style>