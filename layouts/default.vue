<template>
  <div class="container">
    <HeaderVue/>
    <div class="content">
      <Nuxt />
    </div>
    <FooterVue/>
  </div>
</template>
<script>
import HeaderVue from '../components/Header.vue'
import FooterVue from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderVue,
    FooterVue
  },
}
</script>

<style>
  .content {
    margin: 13.5rem 0;
  }
</style>
