<template>
  <div class="like-block">
    <h2 class="block-ttl">いいね</h2>
    <button @click='addLike'>いいねマーク</button>
  </div>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import firebase from '@/firebase/firebase';
let auth;
export default {
  name: 'Like',
  data() {
    return {
      userInfo: [],
    }
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userInfo = user
      }
    })
  },
  methods: {
    async addLike() {
      await addDoc(collection(firebase, "likes"), {
        video_id: this.$router.history.current.params.id,
        user_id: this.userInfo.uid,
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
