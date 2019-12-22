<template>
    <div>
        <script-subclass v-for="scriptGroup in scriptGroups" :group="scriptGroup.title"
                         :list="scriptGroup.list" v-if="!isEmpty"></script-subclass>
        <div v-if="isEmpty"> Empty meeting list</div>
    </div>
</template>

<script>
  import * as R from 'ramda'
  import ScriptSubclass from '../components/script/ScriptSubclass'

  export default {
    name: 'Meetings',
    components: {ScriptSubclass},
    data () {
      return {
        scriptGroups: [{
          title: '2019-12',
          list: [{
            title: '2019-12-24',
            desc: 'w/ Peterpan, tinkerbell'
          }]
        }]
      }
    },
    computed: {
      isEmpty () {
        return R.isEmpty(this.scriptGroups)
      }
    }
  }
</script>

<style scoped>

</style>