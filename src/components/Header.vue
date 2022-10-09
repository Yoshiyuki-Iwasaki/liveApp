<template>
  <header>
    <div class="inner">
      <h1 class="title"><a href="/" class="logo-link">Logo</a></h1>
      <ul v-if="userInfo.email" class="list">
        <li class="list-item"><a class="list-link" href="/notification">通知</a></li>
        <li class="list-item"><a class="list-link" href="/profile">プロフィール</a></li>
        <li class="list-item"><a class="list-link" @click='handleSignOut'>ログアウト</a></li>
      </ul>
      <ul v-else class="list">
        <li class="list-item"><a class="list-link" href="/signIn">ログイン</a></li>
        <li class="list-item"><a class="list-link" href="/signUp">ユーザー登録</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
let auth;
export default {
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
    handleSignOut() {
      auth = getAuth();
      signOut(auth).then(() => {
        // this.$router.push('/');
      })
    }
  }
}

</script>

<style scoped lang="scss">
.inner {
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 90%;
}

.logo-link {
  font-size: 2.2rem;
  font-weight: 700;
  transition: opacity 0.4s;

  &:hover {
    opacity: .6;
  }
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
}

.list-link {
  font-size: 1.4rem;
  font-weight: 700;
  transition: opacity 0.4s;

  &:hover {
    opacity: .6;
  }
}
</style>
