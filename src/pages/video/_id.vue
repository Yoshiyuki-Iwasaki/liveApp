<template>
  <section>
    <div>
      <h1 class="ttl">{{videos.ttl}}</h1>
      <div class="video-block">
        <iframe
width="560" height="315" :src="videos.videoUrl" title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <Like />
      <Comment />
      <div class="chat-block">
        <NuxtLink class="link" :to="pageUrl('chatroom')">
          チャット
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { defineComponent } from 'vue';
import Comment from '../../components/Views/CommentSec.vue';
import Like from '../../components/Parts/Like.vue';
import firebase from '@/firebase/firebase';

export default defineComponent({
  name: "VideoPage",
  components: { Comment, Like },
  data() {
    return {
      videos: []
    };
  },
  async mounted() {
    const docRef = doc(firebase, "videos", this.$router.history.current.params.id);
    const docSnap = await getDoc(docRef);
    this.videos = { ...docSnap.data() };
    this.videos.id = docSnap.id;
  },
  methods: {
    pageUrl(page) {
      const url = "/" + page + "/" + this.$router.history.current.params.id
      return url
    },
  }
})
</script>

<style scoped lang="scss">
.video-block,
.chat-block {
  margin-top: 2rem;
}

.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
