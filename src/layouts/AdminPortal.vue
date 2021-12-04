<template>
  <v-app id="inspire">
    <!-- snackbar -->
    <v-snackbar v-model="snackbar" right top rounded="pill" color="green" >Logged In Successfully
        <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
    </v-snackbar>
    <!--Drawer Left-->
    <LeftDrawer :leftDrawer="leftDrawer" />
    <!--Drawer Right-->
    <RightDrawer :rightDrawer="rightDrawer"/>
    <!--Navbar-->
    <TopNav @toggleLeft="toggleLeftDrawer" @toggleRight="toggleRightDrawer" />
    <!-- Main Content -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!--Floating btn -->
    <v-btn bottom color="grey" fab  small fixed right>
      <v-icon>mdi-ship-wheel</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import RightDrawer from '@/layouts/portal/RightDrawer.vue'
import LeftDrawer from '@/layouts/portal/LeftDrawer.vue'
import TopNav from '@/layouts/portal/TopNav.vue'
export default {
  name: 'Portal',
  components: {
    LeftDrawer,
    RightDrawer,
    TopNav,
  },
  data(){
    return{
      rightDrawer: false,
      leftDrawer: true,
      loggedIn:false,
      snackbar: false,
      theme: true,
      text:'',
      items: [
          { icon: "mdi-view-dashboard",  text: "Dashboard", url: '/adminportal',},
          { icon: "mdi-chevron-up", 'icon-alt': 'mdi-account-supervisor-circle',
              text: 'User', model: false,
              children: [
                { icon: "mdi-chevron-right", text: 'Register', url: '/register',},
              ],
          },
          { icon: "mdi-chevron-up", 'icon-alt': 'mdi-account-group',
              text: 'Blog', model: false,
              children: [
                { icon: "mdi-chevron-right", text: 'Blog', url: '/blog',},
              ],
          },
          { icon: "mdi-tune", text: "Settings", url: '/settings', },
      ],
    }
  },
  created(){
    // 
  },
  mounted(){
    this.snackbar = localStorage.getItem('loggedIn') ? true : false;
    localStorage.removeItem('loggedIn');
    this.$vuetify.theme.dark = true;
  },

  watch:{
    theme: function(old, newVal){
      this.$vuetify.theme.dark = old;
    }
  },
  methods: {
    logout(){
      console.log("logged out")
      this.$router.push({ name: 'Home' })
    },
    toggleLeftDrawer(){
      this.leftDrawer =!this.leftDrawer
    },
    toggleRightDrawer(){
      this.rightDrawer =!this.rightDrawer
    }
  }
};
</script>
<style scoped>
 span:hover {
  cursor: pointer;
  color: white;
}
</style>
