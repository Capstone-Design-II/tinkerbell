<template>
    <div class="test-paint">
        <MeetingRecord/>
    </div>
</template>

<script>
  import MeetingRecord from '../components/MeetingRecord'
export default {
    name: 'Paint',
    components: {MeetingRecord}
  }
</script>

<style scoped>
.test-paint{
    margin-top: 200px;
}
</style>