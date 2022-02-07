<template>
  <div>
    <v-navigation-drawer app v-model="left" left width="300">
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
     data(){
        return{
        right: null,
        right: false,
        left: null,
        left: false,
        logIn: true,
        loggedIn:false,
        logdIn:true,
    }
  },
}
</script>

<style>

</style>