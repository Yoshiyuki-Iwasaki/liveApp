<template>
  <div class="container">
    <HeaderVue />

    <section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>

    <FooterVue />
  </div>
</template>

<script lang="js">
import HeaderVue from '../../components/Header.vue'
import FooterVue from '../../components/Footer.vue'

export default {
  name: 'VideoPage',
  components: {
    HeaderVue,
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
