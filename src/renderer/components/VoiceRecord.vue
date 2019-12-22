<template>
    <base-file-input default-description="Select voice file" title="Record Your Voice" @file:submit="submit">
        <template v-slot:button-icon>
            <i class="material-icons voice-record-button__icon">settings_voice</i>
        </template>
    </base-file-input>
</template>

<script>
  import BaseFileInput from './base/BaseFileInput'

export default {
    name: 'VoiceRecord',
    components: {BaseFileInput},
    methods: {
      submit (file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped>
    .voice-record-button__icon {
        font-size: 32px;
    }
</style>