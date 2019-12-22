<template>
    <div class="SignIn">
        <div class="GoBack">
            <router-link to="/login" style="color: #2979FF; text-decoration: none"> <- Go back</router-link>
            <div class="RecordBox">
                <voice-record class="voice-record"></voice-record>
            </div>
        </div>
    </div>
</template>

<script>
    import VoiceRecord from '../components/VoiceRecord'
export default {
      name: 'RegisterVoice',
      components: {VoiceRecord}
    }
</script>

<style scoped>
    .GoBack {
        position: absolute; left: 24px; top: 24px;
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
        position: absolute; left: 330px; top: 210px;
    }
    .voice-record >>> .base-file-input__desc {
        background-color: #F7F7F7;
    }
</style>