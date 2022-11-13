<template>
  <button v-if="follow[0]" @click='removeFollow(follow[0])'>フォロー済み</button>
  <button v-else @click='addFollow'>フォローボタン</button>
</template>

<script>
import { collection, getDocs, where, query, doc, addDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
let auth;
export default defineComponent({
  name: 'Follow',
  data() {
    return {
      follow: [],
    }
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userInfo = [];
      if (user) {
        this.userInfo = user
        this.fetchFollow(this.userInfo.uid)
      }
    })
  },
  methods: {
    async fetchFollow(userId) {
      const followQuery = query(collection(firebase, "follow"), where("follow_id", "==", userId), where("follower_id", "==", this.$router.history.current.params.id));
      const followQuerySnapshot = await getDocs(followQuery);
      const fbFollow = [];
      followQuerySnapshot.forEach((doc) => {
        const follow = {
          id: doc.id,
        }
        fbFollow.push(follow);
      });
      this.follow = fbFollow;
    },
    async addFollow() {
      await addDoc(collection(firebase, "follow"), {
        follow_id: this.userInfo.uid,
        follower_id: this.$router.history.current.params.id,
        createdAt: serverTimestamp()
      });
    },
    async removeFollow(follow) {
      await deleteDoc(doc(firebase, "follow", follow.id));
    }
  },
})
</script>
