<template>
  <v-toolbar class="header" dense>
    <v-toolbar-title>
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'main'
        }">
        CurlySuccotash
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        text
        class="browse"
        :to="{
          name: 'tests'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        class="login"
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        class="register"
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        text
        class="logout"
        @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'main'
      })
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: #E9E;
  }
  .register:hover {
    color: #E9E;
  }
  .login:hover {
    color: #E9E;
  }
  .logout:hover {
    color: #E9E;
  }
  .browse:hover {
    color: #E9E;
  }
  .header {
    position:fixed;
    width: 100%;
    z-index: 1;
  }
</style>
