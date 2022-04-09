<template>
  <v-app id="inspire">
    <!--Drawer Left-->
    <v-navigation-drawer app v-model="leftDrawer" fixed left width="344">
      <v-list dense>
        <Auth />
      </v-list>
    </v-navigation-drawer>
    <!--Drawer Right-->
    <v-navigation-drawer app v-model="rightDrawer" fixed right width="344">
      <v-list dense>
        <Auth />
      </v-list>
    </v-navigation-drawer>
    <!--Top Navbar-->
     <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="leftDrawer = !leftDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'Home' }">
        <div class="d-flex align-center">
          <v-btn text rounded color="white">Techminate</v-btn>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon class="hidden-sm-and-down" @click.stop="rightDrawer = !rightDrawer"></v-app-bar-nav-icon> -->
      <v-btn color="white" text rounded  @click.stop="rightDrawer = !rightDrawer"><v-icon>mdi-login</v-icon></v-btn>
    </v-app-bar>
    <!-- Main Content -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- Footer -->
      <Footer />
  </v-app>
</template>

<script>
import Footer from '@/layouts/guest/Footer.vue'
import Auth from '@/views/guest/auth/Auth.vue'
export default {
  name: 'App',

  components: {
    Footer,
    Auth
  },
  data(){
    return{
      rightDrawer: false,
      leftDrawer: false,
      snackbar: false,
    }
  },
  methods: {
    toggleLeftDrawer(){
      this.leftDrawer =!this.leftDrawer
    },
    toggleRightDrawer(){
      this.rightDrawer =!this.rightDrawer
    }
  }
};
</script>
<style >
.removeLine{
    text-decoration: none;
    color: white;
 }
 span:hover {
  cursor: pointer;
  
}
</style>
