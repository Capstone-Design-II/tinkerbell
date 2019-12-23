<template>
    <div class="display-script l-width-full">
        <div class="display-script__header">
            <div class="mdc-typography--headline4">{{title}}</div>
            <div class="mdc-typography--caption">{{status}}</div>
        </div>
        <base-divider></base-divider>
        <div>
            <p class="mdc-typography--body2 display-script__content">{{script}}</p>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import * as R from 'ramda'
  import {mapActions} from '../store/modules/meeting'
  import {actions} from '../store/modules/meeting/types'
  import BaseDivider from '../components/base/BaseDivider'

  export default {
    name: 'DisplayScript',
    components: {BaseDivider},
    data () {
      return {
        id: '',
        status: 'Completed',
        title: 'Title',
        script: 'Script'
      }
    },
    methods: {
      ...mapActions([actions.GET_MEETING_NOTE])
    },
    beforeMount () {
      this.id = this.$route.params.id
      return this[actions.GET_MEETING_NOTE](this.id)
        .then((data) => {
          console.log(data)
          this.status = data.status
          this.title = moment(data.createdAt).format('YYYY-MM-DD A hh:mm')
          this.script = R.pipe(
            R.split('\n'),
            R.tail,
            R.join('\n')
          )(data.note)
        })
    }
  }
</script>

<style scoped>
    .display-script {
        padding: 20px 10px;
    }

    .display-script__header {
        margin: 30px 0;

    }
    .display-script__content {
        white-space: pre-wrap;
        margin: 30px 0;
    }
</style>