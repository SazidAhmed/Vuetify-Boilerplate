<template>
    <div>
        <v-form >
            <v-text-field v-model="email" label="Email" name="email" prepend-inner-icon="mdi-account" type="email" class="rounded-0" outlined></v-text-field>
            <v-text-field v-model="password" label="Password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
            <div>
                <p v-if="error" class="red--text">*** {{ error }} ***</p>
            </div>
            <div class="white--text" >
                <v-btn color="primary" block tile @click="submitLogin">Login</v-btn>
            </div>
            <v-row justify="space-between" no-gutters>
                <span class="gray--text ma-2" align="center" @click.self="showForgotPassword">Forgot Password ?</span>
                <span class="gray--text ma-2" align="center" @click.self="showRegister">Register here</span>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    components: {
       //
    },
    data(){
        return{
            email:null,
            password:null,
            password2:null,
            feedback: null,
            error: null,
        }
    },
    mounted(){
        //
    },
    methods:{
        showRegister(){
            this.$emit('showRegister')
        },
        showForgotPassword(){
            this.$emit('forgotPassword')
        },
        submitLogin(){
            console.log(this.email, this.password)
        }
    }
}
</script>

<style>

</style>