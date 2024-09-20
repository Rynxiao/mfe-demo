<template>
  <div id="app">
    <h1>Hello Vue with Webpack!</h1>
    <Button @click="handleClick">Albums: Click me</Button>
  </div>
</template>

<script>
import Button from './components/ui/button/Button.vue'

export default {
  name: 'App',
  methods: {
    handleClick() {
      alert('Button clicked!')
    },
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
