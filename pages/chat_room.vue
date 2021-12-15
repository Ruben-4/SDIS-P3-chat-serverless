<template>

  <v-card elevation="10">
      <tabla v-if = 'user'></tabla>
      <loggin v-else></loggin>
  </v-card>

</template>

<script>
import { firebase } from 'firebase'
export default {
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  name: 'App',
  components: {
    Chat, Login
  }
}
</script>