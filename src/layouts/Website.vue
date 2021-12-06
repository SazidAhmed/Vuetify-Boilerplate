<template>
  <v-app id="inspire">
    <!--Drawer Left-->
    <!--Drawer Right-->
    <!--Navbar-->
      <TopNav />
    <!-- Main Content -->
    <!-- Footer -->
      <Footer />
  </v-app>
</template>

<script>
import TopNav from '@/layouts/website/TopNav.vue'
import Footer from '@/layouts/website/Footer.vue'
export default {
  name: 'App',

  components: {
    TopNav,
    Footer
  },
  data(){
    return{
      
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
