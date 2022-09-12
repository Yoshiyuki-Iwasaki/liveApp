<template>
  <div class="container">
    <HeaderVue/>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import HeaderVue from '../components/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderVue,
  },
}
</script>

<style>
  .content {
    margin: 8rem auto;
    max-width: 1000px;
    width: 90%;
  }
</style>
