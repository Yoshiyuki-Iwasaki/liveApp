<template>
  <section>
    <h1 class="ttl">Video詳細</h1>
    <div class="video-block">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Like />
    <Comment />
  </section>
</template>

<script>
import Comment from '../../components/Comment.vue';
import Like from '../../components/Like.vue';

export default {
    name: "VideoPage",
    components: { Comment, Like },
}
</script>

<style scoped lang="scss">
  .video-block {
    margin-top: 2rem;
  }

  .ttl {
    font-size: 2rem;
    font-weight: 700;
  }
</style>
