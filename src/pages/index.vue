<template>
  <VideoListVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VideoListVue from '../components/VideoList.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    VideoListVue,
  },
});
</script>
