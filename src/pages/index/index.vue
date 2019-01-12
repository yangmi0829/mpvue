<template>
  <div class="container">
    <i-button type="success" @click="goTo('/pages/index/index2')">1</i-button>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    goTo(url) {
      this.$router.push(url) ;
      //wx.navigateTo({url:url})
    }
  }
}
</script>

<style scoped>

</style>
