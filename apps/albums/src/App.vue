<template>
  <div id="app">
    <h1>Hello Vue with Webpack!</h1>
    <Button @click="handleClick">Click me!</Button>
  </div>
</template>

<script>
import Button from './components/Button.vue'

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
