<template>
  <div class="container">
    <i-button type="success" @click="goTo('/pages/index/index')">2</i-button>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    }
  }
}
</script>

<style scoped>

</style>
