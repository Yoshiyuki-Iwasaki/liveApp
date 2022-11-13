<template>
  <div>
    <h1 class="ttl">プロフィール</h1>
    <div class="txtArea">
      <p class="email">email: {{ users[0] && users[0].email}}</p>
    </div>
    <Follow follow="follow" add-follow="addFollow" remove-follow="removeFollow"/>
  </div>
</template>

<script lang="js">
import { collection, doc, getDocs, addDoc, deleteDoc, where, query, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
import Follow from '@/components/Parts/Follow';
let auth;
export default defineComponent({
  name: 'ProfilePage',
  components: {
    Follow
  },
  data () {
    return {
      userInfo: [],
      users: [],
      follow: [],
    }
  },
  async mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userInfo = [];
      if (user) {
        this.userInfo = user
        this.fetchFollow(this.userInfo.uid)
      }
    })

    const usersQuery = query(collection(firebase, "users"), where("uid", "==", this.$router.history.current.params.id));
    const usersQuerySnapshot = await getDocs(usersQuery);
    const fbUsers = [];
    usersQuerySnapshot.forEach((docs) => {
      const user = {
        id: docs.uid,
        email: docs.data().email,
        createdAt: docs.data().createdAt,
      }
      fbUsers.push(user);
    });
    this.users = fbUsers;
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

<style scoped lang="scss">
.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
