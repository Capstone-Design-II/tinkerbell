<template>
    <div class="mdc-list-group">
        <script-subclass v-for="scriptGroup in formattedGroups" :group="scriptGroup.title"
                         :list="scriptGroup.list" v-if="!isEmpty"></script-subclass>
        <div v-if="isEmpty"> Empty meeting list</div>
    </div>
</template>

<script>
  import * as R from 'ramda'
  import moment from 'moment'
  import ScriptSubclass from '../components/script/ScriptSubclass'
  import {mapActions} from '../store/modules/meeting'
  import {actions} from '../store/modules/meeting/types'

  export default {
    name: 'Meetings',
    components: {ScriptSubclass},
    data () {
      return {
        scriptGroups: []
      }
    },
    computed: {
      isEmpty () {
        return R.isEmpty(this.scriptGroups)
      },
      formattedGroups () {
        const monthWeek = (week) => {
          const m = moment().week(week)
          const weekOfMonth = m.week() - moment(m).startOf('month').week() + 1
          return `${m.format('YYYY-MM')} week ${weekOfMonth}`
        }
        return R.map(R.evolve({
          title: monthWeek,
          list: R.map(R.evolve({dateTime: date => moment(date).format('YYYY-MM-DD A h:mm:ss')}))
        }))(this.scriptGroups)
      }
    },
    methods: {
      ...mapActions([actions.GET_MEETING_LIST])
    },
    beforeMount () {
      const weekInYear = (dateTimeString) => {
        const m = moment(dateTimeString, 'YYYY-MM-DD HH:mm:ss')
        return m.week()
      }
      return this[actions.GET_MEETING_LIST]()
        .catch(_ => {
          return {
            data: [{
              uuid: '2333',
              created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
              status: 'RUNNING'
            }, {
              uuid: '2444',
              created_at: moment().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
              status: 'COMPLETED'
            }, {
              uuid: '2555',
              created_at: moment().subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'),
              status: 'COMPLETED'
            }]
          }
        })
        .then((data) => {
          // date, status, uuid
          this.scriptGroups = R.pipe(
            R.prop('data'),
            R.map((item) => ({id: item.uuid, dateTime: item['created_at'], status: item.status})),
            R.groupBy(({dateTime}) => weekInYear(dateTime)),
            R.mapObjIndexed((list, week) => ({title: week, list})),
            R.values,
            R.sort(({title: title1}, {title: title2}) => (title2 - title1))
          )(data)
          console.log(this.scriptGroups)
        })
    }
  }
</script>

<style scoped>

</style>