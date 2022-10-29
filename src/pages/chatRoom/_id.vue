<template>
  <div>
    <h1 class="ttl">チャット</h1>
  </div>
</template>

<script lang="js">
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { defineComponent } from 'vue';
let auth;
export default defineComponent({
  name: 'ChatRoomPage',
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
      if (user) {
        this.userInfo = user
      }
    })
  }
})
</script>

<style scoped lang="scss">
.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
