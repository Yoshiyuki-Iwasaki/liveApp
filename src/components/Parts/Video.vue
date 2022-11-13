
<template>
  <NuxtLink class="link" :to="'video/'+video.id">
    <figure>
      <img :src=video.thumb :alt=video.ttl >
    </figure>
    <div class="txt-area">
      <h2 class="title">{{ video.ttl }}</h2>
    </div>
  </NuxtLink>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Video',
  props: ['video'],
})
</script>

<style scoped lang="scss">

.link {
  display: block;
  height: 100%;
  transition: opacity 0.4s;

  &:hover {
    opacity: .6;
  }
}

.txt-area {
  margin: 1.5rem 1rem;
}

.title {
  font-size: 1.4rem;
  color: #333;
  line-height: 1.6;
}
</style>
