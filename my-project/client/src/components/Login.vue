<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="bg">
        <div class="container">
          <span class="login__span">Log in</span>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br />
          <v-text-field type="password" label="Password" v-model="password"></v-text-field>
          <br />
          <div class="error" v-html="error" />
          <v-btn class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "main"
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.container {
  width: 350px;
  height: 80px;
  margin: 200px auto;
}
.bg {
  width: 450px;
  height: 290px;
  box-shadow: 0 0 50px rgb(0, 0, 0);
  margin: 160px auto;
  background-color: rgb(255, 255, 255);
}
.login__span {
  font-size: 40px;
  color: #2c3e50;
}
</style>
