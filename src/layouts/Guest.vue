<template>
  <v-app id="inspire">
    <!--Drawer Left-->
    <LeftDrawer :leftDrawer="leftDrawer" />
    <!--Drawer Right-->
    <RightDrawer :rightDrawer.sync="rightDrawer"/>
    <!--Navbar-->
    <TopNav @toggleRight="toggleRightDrawer" />
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
import TopNav from '@/layouts/guest/TopNav.vue'
import LeftDrawer from '@/layouts/guest/LeftDrawer.vue'
import RightDrawer from '@/layouts/guest/RightDrawer.vue'
import Footer from '@/layouts/guest/Footer.vue'
export default {
  name: 'App',

  components: {
    LeftDrawer,
    RightDrawer,
    TopNav,
    Footer
  },
  data(){
    return{
      rightDrawer: false,
      leftDrawer: true,
      loggedIn:false,
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
