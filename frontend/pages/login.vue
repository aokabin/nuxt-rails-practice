<template>
  <div class="login-form">
    <p>{{ email }}</p>
    <input v-model="email" type="email" />
    <p>{{ password }}</p>
    <input v-model="password" type="password" />
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const api = this.$store.dispatch('login/login', {
        email: this.$data.email,
        password: this.$data.password
      })

      api.then((resp) => {
        console.log(resp)
        alert('OK！')
      })
    }
  }
}
</script>
