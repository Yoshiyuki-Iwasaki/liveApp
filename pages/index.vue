<template>
  <div class="container">
    <HeaderVue />
    <KvVue />
    <FooterVue />
  </div>
</template>

<script lang="js">
import HeaderVue from '../components/Header.vue'
import KvVue from '../components/Kv.vue'
import FooterVue from '../components/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderVue,
    KvVue,
    FooterVue,
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
