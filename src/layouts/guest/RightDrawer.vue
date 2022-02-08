<template>
  <div>
    <v-navigation-drawer app :value="rightDrawer" @input="$emit("update:rightDrawer", $event)" fixed right width="344">
      <v-list dense>
        <Auth />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Auth from '@/views/guest/auth/Auth.vue'
export default {
  props:['rightDrawer'],
  components: {
    Auth
  },
   data(){
    return{
     //
    }
  },
}
</script>

<style>

</style>