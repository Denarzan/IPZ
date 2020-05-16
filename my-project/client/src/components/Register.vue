<template>
  <div>
    <h1>Register</h1>
    <input 
    type = "email" 
    name = "email"
    v-model ="email"
    placeholder="email" /> 
    <br>
    <input 
    type = "password" 
    name = "password"
    v-model="password"
    placeholder="password" /> 
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {//write when email changing in concole
    email (value) {
      console.log('email has changed', value)
      }
    },
    methods:{
      async register() {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    },
    mounted() {
      setTimeout(() =>  {//change email after 2 second to admin
        this.email = 'admin@gmail.com'
      }, 2000)
    }
  }
</script>

<style scoped>

</style>
