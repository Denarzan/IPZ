<template>
  <v-toolbar dense dark>
    <v-toolbar-title>
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        CurlySuccotash
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark
        class="register"
        @click="navigateTo({name: 'login'})">
          Login
      </v-btn>

      <v-btn flat dark
        class="register"
        @click="navigateTo({name: 'register'})">
          Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
</style>
