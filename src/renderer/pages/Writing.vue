<template>
    <div class="writing">
        <MeetingRecord class="writing__input" @file:submit="submit"/>
        <div :class="['mdc-dialog', done ? 'mdc-dialog--open': '']"
             role="alertdialog"
             aria-modal="true"
             aria-labelledby="writing-dialog-title"
             aria-describedby="writing-dialog-content">
            <div class="mdc-dialog__container">
                <div class="mdc-dialog__surface">
                    <div class="mdc-dialog__content" id="writing-dialog-content">
                        Uploaded!
                    </div>
                    <footer class="mdc-dialog__actions">
                        <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes"
                                @click="done = false">
                            <span class="mdc-button__label">OK</span>
                        </button>
                    </footer>
                </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
        </div>
    </div>
</template>

<script>
  import MeetingRecord from '../components/MeetingRecord'
  import {mapActions} from '../store/modules/meeting'
  import {actions} from '../store/modules/meeting/types'

  export default {
    name: 'Writing',
    components: {MeetingRecord},
    data: _ => ({
      done: false
    }),
    methods: {
      ...mapActions([actions.CREATE_MEETING_NOTE]),
      submit (file) {
        console.log(file)
        this[actions.CREATE_MEETING_NOTE](file.path)
          .then((data) => {
            this.done = true
            console.log(data)
          })
      }
    }
  }
</script>

<style scoped>
    .writing {
        padding: 35% 0;
    }

    .writing__input {
        max-width: 300px;
    }
</style>