<template>
    <base-file-input title="Record Meeting" default-description="Select meeting record"
                     @file:submit="submit">
        <template v-slot:button-icon>
            <i class="material-icons meeting-record-button__icon">note_add</i>
        </template>
    </base-file-input>
</template>

<script>
  import BaseFileInput from './base/BaseFileInput'
export default {
    name: 'MeetingRecord',
    components: {BaseFileInput},
    methods: {
      submit (file) {
        this.$emit('file:submit', file)
      }
    }
  }
</script>

<style scoped>
.meeting-record-button__icon {
    font-size: 32px;
}
</style>