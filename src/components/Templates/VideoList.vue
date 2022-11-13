
<template>
  <ul class="list">
    <li v-for="video in videos" :key="video.id" class="list-item">
      <Video :video="video" />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import Video from '@/components/Parts/Video.vue'

export default defineComponent({
  name: 'VideoList',
  components: {
    Video,
  },
  props: ['videos'],
})
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;
}

.list-item {
  flex-basis: 300px;
  border: .1rem solid #333;
}

</style>
