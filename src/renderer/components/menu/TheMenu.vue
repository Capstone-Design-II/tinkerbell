<template>
    <aside class="mdc-drawer">
        <div class="mdc-drawer__header">
            <the-profile :title="name" sub-title="More">
            </the-profile>
        </div>
        <base-divider></base-divider>
        <div class="mdc-drawer__content">
            <nav class="mdc-list">
                <base-menu-item text='Writing'>
                    <template v-slot:icon>
                        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">note_add</i>
                    </template>
                </base-menu-item>
                <base-menu-item text="Meeting list">
                    <template v-slot:icon>
                        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">speaker_notes</i>
                    </template>
                </base-menu-item>
            </nav>
        </div>
    </aside>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import BaseMenuItem from './BaseMenuItem'
  import TheProfile from './TheProfile'
  import BaseDivider from '../base/BaseDivider'
  import {} from '../../store/modules/user/types'

const { mapState } = createNamespacedHelpers('user')

  export default {
    name: 'TheMenu',
    components: {BaseDivider, TheProfile, BaseMenuItem},
    computed: {
      ...mapState(['id', 'name'])
    }
  }
</script>

<style scoped>

</style>