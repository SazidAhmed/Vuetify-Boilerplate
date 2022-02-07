<template>
    <div>
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
            <v-row justify="space-between" no-gutters>
                <span class="gray--text ma-2" align="center">Already have an account ?</span>
                <span class="gray--text ma-2" align="center" @click.self="showLogin">Login here</span>
            </v-row>
        </v-form>
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