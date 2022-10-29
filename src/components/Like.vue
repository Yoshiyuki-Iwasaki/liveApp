<template>
  <div class="like-block">
    <h2 class="block-ttl">いいね</h2>
    <button v-if="likes[0]" @click='removeLike(likes[0])'>いいね済み</button>
    <button v-else @click='addLike'>いいねマーク</button>
  </div>
</template>

<script>
import { collection, doc, getDocs, addDoc, deleteDoc, where, query, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
let auth;
export default defineComponent({
  name: 'Like',
  data() {
    return {
      userInfo: [],
      likes: [],
    }
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userInfo = user
        this.fetchLike(user.uid)
      }
    })
  },
  methods: {
    async fetchLike(userId) {
      const likesQuery = query(collection(firebase, "likes"), where("video_id", "==", this.$router.history.current.params.id), where("user_id", "==", userId));
      const likesQuerySnapshot = await getDocs(likesQuery);
      const fbLikes = [];
      likesQuerySnapshot.forEach((doc) => {
        const like = {
          id: doc.id,
        }
        fbLikes.push(like);
      });
      this.likes = fbLikes;
    },
    async addLike() {
      await addDoc(collection(firebase, "likes"), {
        video_id: this.$router.history.current.params.id,
        user_id: this.userInfo.uid,
        createdAt: serverTimestamp()
      });
    },
    async removeLike(likes) {
      await deleteDoc(doc(firebase, "likes", likes.id));
    }
  },
})
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
