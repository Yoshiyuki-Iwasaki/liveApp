<template>
  <div class="container">
    <HeaderVue />
    <VideoListVue />
    <FooterVue />
  </div>
</template>

<script lang="js">
import HeaderVue from '../../components/Header.vue'
import VideoListVue from '../../components/VideoList.vue'
import FooterVue from '../../components/Footer.vue'

export default {
  name: 'SignInPage',
  components: {
    HeaderVue,
    VideoListVue,
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
