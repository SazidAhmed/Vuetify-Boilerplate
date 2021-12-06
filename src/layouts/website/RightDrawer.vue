<template>
  <div>
    <v-navigation-drawer app v-model="right" right width="344">
      <v-list dense v-if="!loggedIn">
        <Auth />
      </v-list>
  
    </v-navigation-drawer>
  </div>
</template>

<script>
import Auth from '@/components/auth/Auth.vue'
export default {
components: {
    Auth
  },
   data(){
    return{
      right: null,
      right: false,
      logIn: true,
      loggedIn:false,
      logdIn:true,
    }
  },

}
</script>

<style>

</style>