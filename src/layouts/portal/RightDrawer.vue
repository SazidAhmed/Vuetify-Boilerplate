<template>
  <div>
    <v-navigation-drawer app v-model="rightDrawer" fixed right temporary width="300">
      <!-- avater -->
      <v-layout column align-center>
        <v-flex class="mt-4 mb-4">
            <v-icon class="grey--text" left size="31">mdi-bell-alert</v-icon>
            <span>Notification</span>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <!-- list -->
      <v-list dense>
        <v-list-item @click="notify">
          <v-list-item-action>
              <v-icon class="dark--text">mdi-bell-ring-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title class="dark--text">coming soon.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props:['rightDrawer'],
   data(){
    return{
      // rightDrawer: false,
    }
  },
  methods:{
    notify(){
      console.log('Notify')
    },
  }
}
</script>

<style>

</style>