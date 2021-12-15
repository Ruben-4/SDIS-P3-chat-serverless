<template>
  <div>
      Chat with Firebase!
      <button @click="logout">Logout!</button>
  </div>
</template>

<script>
import { firebase } from 'firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut()
    },
  }
}
</script>