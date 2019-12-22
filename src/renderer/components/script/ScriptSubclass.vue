<template>
    <div>
        <h3 class="mdc-typography--headline4">{{group}}</h3>
        <ul class="mdc-list">
            <template v-for="(item, index) in list">
                <script-detail :item="item"></script-detail>
                <li v-if="index != list.length - 1" class="mdc-list-divider" role="separator"></li>
            </template>
        </ul>
    </div>
</template>

<script>
    import ScriptDetail from './ScriptDetail'

    export default {
      name: 'ScriptSubclass',
      components: {ScriptDetail},
      props: {
        group: {
          type: String,
          default: 'Group name'
        },
        list: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>

</style>