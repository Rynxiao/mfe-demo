<template>
  <button class="albums__button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.albums__button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.albums__button:hover {
  background-color: #369870;
}
</style>
