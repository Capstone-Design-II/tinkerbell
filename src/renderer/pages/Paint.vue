<template>
    <div class="test-paint">
        <voice-record></voice-record>
    </div>
</template>

<script>
  import BaseMenuItem from '../components/menu/BaseMenuItem'
  import BaseProfile from '../components/menu/TheProfile'
  import TheMenu from '../components/menu/TheMenu'
  import VoiceRecord from '../components/VoiceRecord'
export default {
    name: 'Paint',
    components: {VoiceRecord, TheMenu, BaseProfile, BaseMenuItem}
  }
</script>

<style scoped>
.test-paint{
    margin-top: 200px;
}
</style>