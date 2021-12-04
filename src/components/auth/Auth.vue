<template>
    <div>
    <!-- login form -->
        <div>
          <Login />
        </div>
        
    </div>
</template>

<script>
  import Login from '@/components/auth/Login.vue'
  import Register from '@/components/auth/Register.vue'
export default {
  name: 'Auth',
    components: {
      Login,
      Register,
    },
    data(){
     return{
        showLogin:true,
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
      this.showLogin = !this.showLogin
    },

    submitLogin(){
      console.log(this.email, this.password)
    }
  }
}
</script>

<style>

</style>