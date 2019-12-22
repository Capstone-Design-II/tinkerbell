<template>
    <div class="SignIn">
        <div class="Logo">
            <img src="../../../static/images/fairy.png" alt="Logo is missing!">
        </div>
        <div class="Welcome">
            Welcome to Tinkerbell 👋
        </div>
        <div class="AddressBox">
            <div class="InputBox">
                <span class="InputTextName">Username</span><br>
                <label>
                    <input class="InputText" placeholder="  Input Username" v-model="username">
                </label><br>
            </div>
            <div class="InputBox">
                <span class="InputTextName">Password</span><br>
                <label>
                    <input class="InputText" placeholder="  Input Password" v-model="password">
                </label><br>
            </div>
            <button class="BlueButton" type="submit" @click="onSubmit">Sign in</button>
        </div>
        <div class="SignInBox">
            <span>Don't have an account? </span>
            <router-link to="/signup" style="color: #AFAFAF"> Sign up</router-link>
        </div>
    </div>
</template>

<script>
  import {mapMutations} from '../store/modules/user'
  import {mutations} from '../store/modules/user/types'

  export default {
    name: 'Signin',
    data: () => ({
      username: '',
      password: ''
    }),
    methods: {
      ...mapMutations([mutations.SET_NAME]),
      onSubmit () {
        console.log(this.username)
        console.log(this.password)
        this[mutations.SET_NAME](this.username)
        this.$router.push('/main/writing')
      }
    }
  }
</script>

<style scoped>
    .Logo {
        position: absolute;
        left: 449px;
        top: 53px;
        width: 80px;
        height: 80px;
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
        height: 276px;
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
        background-color: #2979ff;
    }

    .SignInBox {
        position: absolute;
        left: 297px;
        top: 510px;
        width: 375px;
        height: 38px;
        border-radius: 10px;
        font-family: Roboto-Medium;
        font-size: 19px;
        text-align: center;
        line-height: 35px;
        color: #AFAFAF;
        border: 1px solid #A4A4A4;
        background-color: #F6F6F6;
    }
</style>