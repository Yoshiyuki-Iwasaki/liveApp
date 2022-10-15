<template>
  <div>
    <h1 class="ttl">プロフィール編集</h1>
    <div class="txtArea">
      <p class="email">email:</p>
    </div>
  </div>
</template>

<script lang="js">
import { getAuth, onAuthStateChanged } from '@firebase/auth';
let auth;
export default {
  name: 'ProfileEditPage',
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
  },
  methods: {
    fileUpload(event) {
      const file = event.target.files[0];
      const storageRef = firebase.storage().ref("images/" + file.name);
      storageRef.put(file).then(() => {
        console.log('uploaded file')
      });
    }
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
