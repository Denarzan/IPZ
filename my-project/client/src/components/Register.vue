<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="bg">
        <div class="container">
          <span class="signup__span">Sign up</span>
          <form name="curly-saccotash-form" autocomplete="off">
            <v-text-field label="Email" v-model="email" required></v-text-field>
            <br />
            <v-text-field type="password" label="Password" v-model="password"></v-text-field>
          </form>
          <br />
          <div class="error" v-html="error" />
          <v-btn class="cyan" @click="register">Register</v-btn>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
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
  height: 300px;
  box-shadow: 0 0 50px rgb(0, 0, 0);
  margin: 160px auto;
  background-color: rgb(255, 255, 255);
}
.signup__span {
  font-size: 40px;
  color: #2c3e50;
}
</style>
