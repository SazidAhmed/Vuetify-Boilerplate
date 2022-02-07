<template>
    <div>
      <div v-if="showSignUp">
        <Login @showRegister="toggleAuth"/>
      </div>
      <div v-else>
        <Register @showLogin="toggleAuth" />
      </div>       
    </div>
</template>

<script>
  import Login from '@/views/guest/auth/Login.vue'
  import Register from '@/views/guest/auth/Register.vue'
export default {
  name: 'Auth',
    components: {
      Login,
      Register,
    },
    data(){
     return{
        showSignUp:true,
        email:null,
        password:null,
        password2:null,
        feedback: null,
        error: null,
        }
    },
  methods:{
    toggleAuth(){
      console.log("toggle clicked")
      this.showSignUp = !this.showSignUp
    },

    submitLogin(){
      console.log(this.email, this.password)
    }
  }
}
</script>

<style>

</style>