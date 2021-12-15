<template>
  <div class="login-container">
    <button @click="loginSubmit">Login con Google!</button>
  </div>
</template>

<script>
import { firebase } from 'firebase'
export default {
  methods: {
    loginSubmit() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
        .catch(console.log)
    }
  }
}
</script>