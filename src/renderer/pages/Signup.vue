<template>
    <div class="SignIn">
        <div class="GoBack">
            <router-link to="/login" style="color: #2979ff;text-decoration: none"> <- Go back</router-link>
        </div>
        <div class="Welcome">
            Create your account
        </div>
        <div class="AddressBox">
            <div class="InputBox">
                <span class="InputTextName">Name</span><br>
                <input class="InputText" placeholder="  Input Name" v-model="username"><br>
            </div>
            <div class="InputBox">
                <span class="InputTextName">Id</span><br>
                <input class="InputText" placeholder="  Input Id" v-model="email"><br>
            </div>
            <div class="InputBox">
                <span class="InputTextName">Password</span><br>
                <input type="password" class="InputText" placeholder="  Input Password" v-model="password"><br>
            </div>
            <button class="BlueButton" type="submit" @click="onSubmit">Sign up</button>
        </div>
    </div>
</template>

<script>
  import {NAMESPACE, state, mutations} from '../store/modules/register/types'
  import {mapMutations} from '../store/modules/register'

  export default {
    name: 'Signup',
    data: () => ({
      username: '',
      email: '',
      password: ''
    }),
    methods: {
      ...mapMutations([mutations.SET_USER_INFO, mutations.INIT]),
      onSubmit () {
        this[mutations.SET_USER_INFO]({
          name: this.username,
          email: this.email,
          password: this.password
        })
        this.$router.push('/registervoice')
      }
    },
    beforeMount () {
      this.username = this.$store.state[NAMESPACE][state.USER_NAME]
      this.email = this.$store.state[NAMESPACE][state.EMAIL]
      this.password = this.$store.state[NAMESPACE][state.PASSWORD]
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

    .AddressBox {
        position: absolute;
        left: 297px;
        top: 196px;
        width: 375px;
        height: 355px;
        border-radius: 10px;
        border: 1px solid #A4A4A4;
        background-color: #FFFFFF;
    }

    .Welcome {
        position: absolute;
        left: 350px;
        top: 146px;
        width: 303px;
        height: 27px;
        font-family: Roboto-Medium;
        font-size: 24px;
        letter-spacing: 0.4px;
        color: #000000;
    }

    .InputBox {
        margin-top: 24px;
        margin-left: 24px;
    }

    .InputTextName {
        font-family: Roboto-Medium;
        font-size: 19px;
    }

    .InputText {
        width: 327px;
        height: 30px;
        font-family: Roboto;
        font-size: 16px;
        border: 1px solid #A4A4A4;
        border-radius: 5px;
    }

    .BlueButton {
        width: 327px;
        height: 36px;
        margin-left: 24px;
        margin-top: 32px;
        font-family: Roboto-Medium;
        font-size: 18px;
        color: #FFFFFF;
        border-radius: 4px;
        background-color: #2979FF;
    }
</style>