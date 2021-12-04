<template>
    <div class="container" >
        <v-card elevation="0">
            <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="" contain height="60"></v-img>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="name" label="Name" name="name" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field>
                    <v-text-field v-model="email" label="Email" name="email" prepend-inner-icon="mdi-account" type="email" class="rounded-0" outlined></v-text-field>
                    <v-text-field v-model="password" label="Password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                    <v-text-field v-model="password2" label="Repeat Password" name="password2" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                    <div>
                        <p v-if="error" class="red--text">*** {{ error }} ***</p>
                    </div>
                    <div class="white--text">
                        <v-btn color="primary" block tile @click="submitRegister">Register</v-btn>
                    </div>
                    <div >
                    <span class="gray--text ma-2" align="center" @click.self="showLogin">Login here</span>
                    <p class="gray--text ma-2" align="center">Forgot Pasword?</p>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return{
            name:null,
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
        showLogin(){
            console.log('show login')
            this.$emit('showLogin')
        },
        submitRegister(){
            console.log(this.name, this.email, this.password, this.password2)
        }
    }
}
</script>

<style>

</style>