<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      :value="leftDrawer"
      v-click-outside="{
        handler: onClickOutside,
        include: include,
      }"
    >
      <!-- avater -->
      <v-layout column align-center>
        <v-avatar class="mt-5" size="50">
          <img
            class="text-lg-center"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          />
        </v-avatar>
        <span class="mt-4">Jhon Doe</span>
        <span class="mb-4 caption">Jhon@gmail.com</span>
      </v-layout>
      <v-divider></v-divider>
      <!-- list -->
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            color="dark"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="dark--text">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.url"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon class="dark--text">{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="dark--text">
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" :to="item.url" color="dark">
            <v-list-item-action>
              <v-icon class="dark--text">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="dark--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon class="dark--text">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="dark--text">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-footer absolute>
        <v-col class="text-center grey--text" cols="12">
          <strong>&copy;Techminate{{ new Date().getFullYear() }}</strong>
        </v-col>
      </v-footer>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["leftDrawer"],
  data() {
    return {
      loggedIn: false,
      snackbar: false,
      theme: true,
      text: "",
      items: [
        { icon: "mdi-view-dashboard", text: "Dashboard", url: "/adminportal" },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-account-supervisor-circle",
          text: "User",
          model: false,
          children: [
            { icon: "mdi-chevron-right", text: "Register", url: "/register" },
          ],
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-account-group",
          text: "Blog",
          model: false,
          children: [{ icon: "mdi-chevron-right", text: "Blog", url: "/blog" }],
        },
        { icon: "mdi-tune", text: "Settings", url: "/settings" },
      ],
    };
  },
  methods: {
    logout() {
      console.log("logged out");
      this.$router.push({ name: "Home" });
    },
    onClickOutside() {
      this.$emit("toggleLeft");
    },
    include() {
      return [document.querySelector(".included")];
    },
  },
};
</script>

<style>
</style>