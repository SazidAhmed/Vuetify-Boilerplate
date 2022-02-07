<template>
  <div class="container" >
    <v-card elevation="0">
      <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="" contain height="60"></v-img>
      <v-card-text>
        <div v-if="showLogin">
          <Login @showRegister="showSignUp" @forgotPassword="showForgotPassword"/>
        </div>
        <div v-if="forgotPassword">
          <ForgotPassword @showLogin="showSignIn" />
        </div>  
        <div v-if="showRegister">
          <Register @showLogin="showSignIn" />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Login from '@/views/guest/auth/Login.vue'
import Register from '@/views/guest/auth/Register.vue'
import ForgotPassword from '@/views/guest/auth/ForgotPassword.vue'
export default {
  name: 'Auth',
  components: {
    Login,
    Register,
    ForgotPassword
  },
  data(){
    return{
      showLogin:true,
      showRegister:false,
      forgotPassword: false,
    }
  },
  methods:{
    showSignUp(){
      console.log("showRegister clicked")
      this.showLogin = false;
      this.showRegister = true
    },

    showSignIn(){
      console.log("showLogin clicked")
      this.forgotPassword = false;
      this.showRegister = false;
      this.showLogin = true;
    },

    showForgotPassword(){
      this.showLogin = false
      this.forgotPassword = true
    }
  }
}
</script>

<style>

</style>