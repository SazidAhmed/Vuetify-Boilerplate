<template>
<div>
      <v-footer color="primary" padless :absolute="!fixed" align="center"  class="py-4 white--text" >
        <v-container>
          <!-- add footer content here -->
          <v-row>
            <v-col cols="12" sm="12" md="3" lg="3">
              <h3 class="mb-2">Our Communities</h3>
              <v-btn-toggle dense background-color="primary" multiple>
                <div v-for="(dt, index) in community" :key="index">
                <a :href="dt.link" target="_blank" style="text-decoration:none; color:white">
                  <v-icon size="25" class="text--darken-1 white--text pl-2">{{ dt.icon }}</v-icon>
                </a>
              </div>
                </v-btn-toggle>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
              <h3 class="mb-2">Useful Links</h3>
              <div v-for="(dt, index) in links" :key="index">
                <a :href="dt.link" target="_blank" style="text-decoration:none; color:white">
                 {{ dt.title }}
                </a>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
              <h3 class="mb-2">Resources</h3>
               <div v-for="(dt, index) in resources" :key="index">
                <a :href="dt.link" target="_blank" style="text-decoration:none; color:white">
                 {{ dt.title }}
                </a>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3">
              <h3 class="mb-2">Others</h3>
              <div v-for="(dt, index) in others" :key="index">
                 <a :href="dt.link" target="_blank" style="text-decoration:none; color:white">
                 {{ dt.title }}
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
      <div class="primary darken-1 white--text">
        <v-row justify="space-between" no-gutters>
        <span class="ma-4">Developed By : Techminate</span>
        <span class="ma-4">Copyright © Techminate {{ new Date().getFullYear() }}</span>
        </v-row>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fixed: true,
      community:[
        {"icon":"mdi-facebook", "link":"https://www.google.com/"},
        {"icon":"mdi-discord", "link":"https://www.google.com/"},
        {"icon":"mdi-twitter", "link":"https://www.google.com/"},
        {"icon":"mdi-reddit", "link":"https://www.google.com/"},
        {"icon":"mdi-youtube", "link":"https://www.google.com/"},
      ],
      links:[
        {"title":"Shiopa", "link":"https://www.google.com/"},
        {"title":"Khana", "link":"https://www.google.com/"},
        {"title":"EP-15", "link":"https://github.com/Techminate"},
        
      ],
      resources:[
        {"title":"Medium", "link":"https://www.google.com/"},
        {"title":"Github", "link":"https://github.com/Techminate"},
      ],
      others:[
        {"title":"Others", "link":"/job"},
        {"title":"Others", "link":"/job"},
      ]
    }
  }
}
</script>

<style>

</style>