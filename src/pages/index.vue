<template>
  <VideoListVue />
</template>

<script>
import { defineComponent } from 'vue';
import VideoListVue from '../components/Views/VideoList.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    VideoListVue,
  },
});
</script>
