<template>
  <div class="login-container">
    <button @click="loginSubmit">Login con Google!</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginSubmit() {
        this.$emit('input')
    }
  }
}
</script>