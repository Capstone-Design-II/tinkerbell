<template>
    <div class="change-voice">
        <VoiceRecord class="voice-record"/>
    </div>
</template>

<script>
  import VoiceRecord from '../components/VoiceRecord'

export default {
    name: 'ChangeVoice',
    components: {VoiceRecord}
  }
</script>

<style scoped>
    .change-voice {
        padding: 35% 0;
    }

    .voice-record {
        max-width: 300px;
    }
</style>