<template>
  <div>
    <h1 class="ttl">通知</h1>
  </div>
</template>

<script lang="js">
import { getAuth, onAuthStateChanged } from '@firebase/auth';
let auth;
export default {
  name: 'NotificationPage',
  components: {
  },
  data () {
    return {
      userInfo: [],
    }
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userInfo = [];
      if (user) {
        this.userInfo = user
      }
    })
  }
}
</script>

<style scoped lang="scss">
.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
