<template>
    <div class="SignIn">
        <div class="GoBack">
            <a @click="$router.back()" style="color: #2979FF; text-decoration: none"> <- Go back</a>
            <div class="RecordBox">
                <voice-record class="voice-record" @file:submit="submit"></voice-record>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions, mapMutations} from '../store/modules/register'
  import {NAMESPACE, state, mutations, actions} from '../store/modules/register/types'
  import {mapMutations as mapUserMutations} from '../store/modules/user'
  import {mutations as userMutations} from '../store/modules/user/types'
  import VoiceRecord from '../components/VoiceRecord'

  export default {
    name: 'RegisterVoice',
    components: {VoiceRecord},
    methods: {
      ...mapMutations([mutations.INIT, mutations.SET_VOICE_FILE_PATH]),
      ...mapActions([actions.REGISTER]),
      ...mapUserMutations([userMutations.SET_ALL]),
      submit (file) {
        this[mutations.SET_VOICE_FILE_PATH](file.path)
        this[actions.REGISTER]()
          .then((data) => {
            console.log(data)
            this[userMutations.SET_ALL]({
              name: this.$store.state[NAMESPACE][state.USER_NAME],
              id: this.$store.state[NAMESPACE][state.EMAIL]
            })
            this[mutations.INIT]()
            this.$router.push('/main/writing')
          })
      }
    }
  }
</script>

<style scoped>
    .GoBack {
        position: absolute;
        left: 24px;
        top: 24px;
        width: 98px;
        height: 20px;
        background-color: #F7F7F7;
        font-family: Roboto-Medium;
        font-size: 19px;
        color: #2979FF;
    }

    .SignIn {
        position: relative;
        width: 1024px;
        height: 768px;
        background: #F7F7F7;
    }

    .RecordBox {
        position: absolute;
        left: 330px;
        top: 210px;
    }

    .voice-record >>> .base-file-input__desc {
        background-color: #F7F7F7;
    }
</style>