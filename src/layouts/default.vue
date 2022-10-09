<template>
  <div class="container">
    <HeaderVue />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script setup>
import HeaderVue from '../components/Header.vue'

</script>

<style>
  .content {
    margin: 5rem auto;
    max-width: 1000px;
    width: 90%;
  }
</style>
