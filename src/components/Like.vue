<template>
  <div class="like-block">
    <h2 class="block-ttl">いいね</h2>
    <button @click='addLike'>いいねマーク</button>
  </div>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import firebase from '@/firebase/firebase';

export default {
  name: 'Like',
  methods: {
    async addLike() {
      await addDoc(collection(firebase, "likes"), {
        video_id: 1,
        user_id: 1,
        createdAt: serverTimestamp()
      });
    }
  },
}
</script>

<style scoped lang="scss">
.like-block {
  margin-top: 2rem;
}

.block-ttl {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
</style>
