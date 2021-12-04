<template>
  <v-app id="inspire">
    <!--Drawer Left-->
   <LeftDrawer />
    <!--Drawer Right-->
   <RightDrawer />
    <!--Navbar-->
   <TopNav />
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
import TopNav from '@/layouts/website/TopNav.vue'
import LeftDrawer from '@/layouts/website/LeftDrawer.vue'
import RightDrawer from '@/layouts/website/RightDrawer.vue'
import Footer from '@/layouts/website/Footer.vue'
export default {
  name: 'App',

  components: {
    TopNav,
    LeftDrawer,
    RightDrawer,
    Footer
  },
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
