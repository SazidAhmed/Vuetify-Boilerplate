<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleLeftDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="font-weight-light">Techminate</span>
        <span></span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on,attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon class="grey--text" size="24px">mdi-account-circle-outline</v-icon>
          </v-btn>
          </template>
          <v-list >
            <v-list-item @click="viewProfile">
              <v-icon class="grey--text" left>mdi-account-tie</v-icon>
              <v-list-item-title class="caption">Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-icon class="grey--text" left>mdi-logout</v-icon>
              <v-list-item-title class="caption">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!--end dropdown -->
      <v-btn icon @click="toggleRightDrawer">
        <v-icon class="grey--text" size="24px">mdi-bell-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  data(){
    return{
     //
    }
  },
  methods: {
    viewProfile(){
      this.$router.push({ name: 'Profile' })
    },
    logout(){
      console.log("logged out")
      this.$router.push({ name: 'Home' })
    },
    toggleLeftDrawer(){
      this.$emit('toggleLeft')
      console.log('leftDrawer clicked')
    },
    toggleRightDrawer(){
      console.log('toggle rightDrawer')
      this.$emit('toggleRight')
    }
  }
}
</script>

<style>

</style>