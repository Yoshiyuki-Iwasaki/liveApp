<template>
  <section>
    <h1 class="ttl">Video詳細</h1>
    <div class="video-block">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="like-block">
      <h2 class="block-ttl">いいね</h2>
      <button>いいねマーク</button>
    </div>
    <div class="comment-block">
      <h2 class="block-ttl">コメント</h2>
      <textarea id="" name="comment" cols="30" rows="10"></textarea>
      <ul class="list">
        <li class="list-item"><p class="list-txt">コメントが入ります。</p></li>
        <li class="list-item"><p class="list-txt">コメントが入ります。</p></li>
        <li class="list-item"><p class="list-txt">コメントが入ります。</p></li>
        <li class="list-item"><p class="list-txt">コメントが入ります。</p></li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'VideoPage',
  components: {
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

<style scoped>
  .video-block,
  .like-block,
  .comment-block {
    margin-top: 2rem;
  }

  .ttl {
    font-size: 2rem;
    font-weight: 700;
  }

  .block-ttl {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .list {
    margin-top: 1rem;
  }

  .list-item {
    margin-top: 1rem;
  }
</style>
