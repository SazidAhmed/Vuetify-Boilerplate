<template>
  <div>
       <v-app-bar app color="primary" dark>
      <!-- <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="left = !left"></v-app-bar-nav-icon>
      <v-spacer></v-spacer> -->
      <router-link :to="{ name: 'Home' }">
        <div class="d-flex align-center">
          <v-btn text rounded color="white">Techminate</v-btn>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn color="white" text rounded class="hidden-sm-and-down" @click="toggleRightDrawer"><v-icon>mdi-login</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
 data(){
    return{
     
    }
  },
   methods: {
    toggleRightDrawer(){
      console.log('toggle rightDrawer')
      this.$emit('toggleRight')
    }
  }
}
</script>

<style>

</style>