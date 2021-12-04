<template>
  <div>
    <v-navigation-drawer app v-model="right" right width="344">
      <v-list dense>
        <Auth />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Auth from '@/components/auth/Auth.vue'
export default {
components: {
    Auth
  },
   data(){
    return{
      right: null,
      right: false,
    }
  },
}
</script>

<style>

</style>