<template>
    <div class="base-file-input mdc-layout-grid">
        <h2 class="base-file-input__header mdc-typography--headline6 u-text-center">
            {{ title }}
        </h2>
        <div class="u-text-center base-file-input-button__container">
            <button class="mdc-button mdc-button--raised base-file-input-button">
                <div class="mdc-button__ripple"></div>
                <slot name="button-icon"></slot>
                <input type="file" name="FileAttachment" class="base-file-input-button__input" @change="uploaded"/>
            </button>
        </div>
        <div>
            <input type="text" class="base-file-input__desc mdc-typography--subtitle1 l-width-full u-text-center"
                   readonly :placeholder="descPlaceHolder">
            <base-divider></base-divider>
        </div>
        <div class="mdc-layout-grid">
            <div class="mdc-layout-grid__inner">
                <button class="mdc-button mdc-button--raised mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop"
                        :disabled="file == null"
                        @click="submit(file)">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label"> Submit </span>
                </button>
                <button class="mdc-button mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop" @click="clear">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label"> Clear </span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
  import * as R from 'ramda'
  import BaseDivider from './BaseDivider'

  export default {
    name: 'BaseFileInput',
    components: {BaseDivider},
    props: {
      title: {
        type: String,
        default: 'Select the file'
      },
      defaultDescription: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        file: null
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
      },
      submit () {
        this.$emit('file:submit', this.file)
      }
    }
  }
</script>

<style scoped>
    .base-file-input-button {
        border-radius: 50%;
        padding: 0;
        width: 64px;
        height: 64px;
    }

    .mdc-layout-grid__inner {
        justify-content: center;
    }

    .base-file-input-button__container {
        margin: 10px 0;
    }

    .base-file-input-button__input {
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

    .base-file-input__desc {
        border: 0
    }
</style>