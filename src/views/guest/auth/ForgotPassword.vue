<template>
    <div>
        <v-form >
            <v-text-field v-model="email" label="Email" name="email" prepend-inner-icon="mdi-account" type="email" class="rounded-0" outlined></v-text-field>
            <div>
                <p v-if="error" class="red--text">*** {{ error }} ***</p>
            </div>
            <div class="white--text" >
                <v-btn color="primary" block tile @click="submit">Submit</v-btn>
            </div>
            <v-row justify="space-between" no-gutters>
                <span class="gray--text ma-2" align="center">Have the password ?</span>
                <span class="gray--text ma-2" align="center" @click.self="showLogin">Login here</span>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    components: {
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
        showLogin(){
            this.$emit('showLogin')
        },
        submit(){
            console.log('submit')
        },
    }
}
</script>

<style>

</style>