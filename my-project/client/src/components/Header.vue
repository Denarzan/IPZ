<template>
  <v-toolbar class="header" dense dark>
    <v-toolbar-title>
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        CurlySuccotash
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        class="browse"
        @click="navigateTo({name: 'tests'})">
          Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        class="login"
        @click="navigateTo({name: 'login'})">
          Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        class="register"
        @click="navigateTo({name: 'register'})">
          Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
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
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
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
