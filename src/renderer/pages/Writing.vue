<template>
    <div class="writing">
        <MeetingRecord class="writing__input"/>
    </div>
</template>

<script>
  import MeetingRecord from '../components/MeetingRecord'

  export default {
    name: 'Writing',
    components: {MeetingRecord}
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