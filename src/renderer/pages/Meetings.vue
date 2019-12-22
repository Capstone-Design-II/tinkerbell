<template>
    <div class="mdc-list-group">
        <script-subclass v-for="scriptGroup in formattedGroups" :group="scriptGroup.title"
                         :list="scriptGroup.list" v-if="!isEmpty"></script-subclass>
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
        const formatted = R.map(R.evolve({
          title: monthWeek,
          list: R.pipe(
            R.sort(({dateTime: date1}, {dateTime: date2}) => (moment(date2) - moment(date1))),
            R.map(R.evolve({dateTime: date => moment(date).format('YYYY-MM-DD A h:mm:ss')}))
          )
        }))(this.scriptGroups)
        console.log(formatted)
        return formatted
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
        .then((data) => {
          // date, status, uuid
          this.scriptGroups = R.pipe(
            R.map((item) => ({id: item.uuid, dateTime: item.createdAt, status: item.status})),
            R.groupBy(({dateTime}) => weekInYear(dateTime)),
            R.mapObjIndexed((list, week) => ({title: week, list})),
            R.values,
            R.sort(({title: title1}, {title: title2}) => (title2 - title1))
          )(data)
        })
    }
  }
</script>

<style scoped>

</style>