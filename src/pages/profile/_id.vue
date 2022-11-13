<template>
  <div>
    <h1 class="ttl">プロフィール</h1>
    <div class="txtArea">
      <p class="email">email: {{ users[0] && users[0].email}}</p>
    </div>
    <Follow />
  </div>
</template>

<script lang="js">
import { collection, getDocs, where, query } from "firebase/firestore";
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
import Follow from '@/components/Parts/Follow';
export default defineComponent({
  name: 'ProfilePage',
  components: {
    Follow
  },
  data () {
    return {
      users: [],
    }
  },
  async mounted() {

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
})
</script>

<style scoped lang="scss">
.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
