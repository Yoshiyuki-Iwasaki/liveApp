<template>
  <div class="like-block">
    <h2 class="block-ttl">いいね</h2>
    <button @click='addLike'>いいねマーク</button>
  </div>
</template>

<script>
import { collection, getDocs, addDoc, where, query, serverTimestamp } from "firebase/firestore";
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
  async mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userInfo.uid = '';
      if (user) {
        this.userInfo = user
      }
    })
    const q = query(collection(firebase, "likes"), where("video_id", "==", this.$router.history.current.params.id));
    // const q = query(collection(firebase, "likes"), where("video_id", "==", this.$router.history.current.params.id), where("user_id", "==", this.userInfo.uid));
    const querySnapshot = await getDocs(q);
    const fbComments = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        user_id: doc.data().user_id,
        video_id: doc.data().video_id,
        createdAt: doc.data().createdAt,
      }
      fbComments.push(todo);
    });
    this.comments = fbComments;
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
