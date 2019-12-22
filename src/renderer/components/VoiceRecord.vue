<template>
    <div class="voice-record mdc-layout-grid">
        <div class="voice-record__header mdc-typography--headline6 u-text-center">
            Record Your Voice
        </div>
        <div class="u-text-center">
            <button class="mdc-button mdc-button--raised voice-record-button">
                <div class="mdc-button__ripple"></div>
                <i class="material-icons voice-record-button__icon" aria-hidden="true">settings_voice</i>
                <input type="file" name="FileAttachment" class="voice-record-button__input" @change="uploaded"/>
            </button>
        </div>
        <div>
            <input type="text" class="voice-record__desc mdc-typography--subtitle1 l-width-full u-text-center"
                   readonly :placeholder="descPlaceHolder">
            <base-divider></base-divider>
        </div>
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
                <button class="mdc-button mdc-button--raised mdc-layout-grid__cell">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label"> Submit </span>
                </button>
                <button class="mdc-button mdc-layout-grid__cell" @click="clear">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label"> Clear </span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
  import * as R from 'ramda'
  import BaseDivider from './base/BaseDivider'

  export default {
    name: 'VoiceRecord',
    components: {BaseDivider},
    data () {
      const defaultDescription = 'Select voice file'
      return {
        file: null,
        defaultDescription
      }
    },
    computed: {
      descPlaceHolder () {
        return R.ifElse(
          R.isNil,
          R.always(this.defaultDescription),
          R.prop('name')
        )(this.file)
      }
    },
    methods: {
      uploaded (event) {
        this.file = R.path(['target', 'files', 0], event)
      },
      clear () {
        this.file = null
      }
    }
  }
</script>

<style scoped>
    .voice-record-button {
        border-radius: 50%;
        padding: 0;
        width: 64px;
        height: 64px;
    }

    .voice-record-button__icon {
        font-size: 32px;
    }

    .voice-record-button__input {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
        z-index: 10;
        font-size: 20px;
        cursor: pointer;
        height: 36px;
        opacity: 0;
        filter: alpha(opacity=0);
    }

    .voice-record__desc {
        border: 0
    }
</style>