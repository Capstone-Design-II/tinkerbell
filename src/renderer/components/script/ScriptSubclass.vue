<template>
    <div>
        <h3 class="mdc-typography--headline6">{{group}}</h3>
        <ul class="mdc-list mdc-list--two-line">
            <template v-for="(item, index) in list">
                <script-detail :title="item.dateTime" :desc="item.status"
                               :status="item.status == 'COMPLETED'" :id="item.id"></script-detail>
                <hr class="mdc-list-divider" v-if="index != list.length - 1">
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