<template>
  <header>
    <div class="inner">
      <h1 class="title"><NuxtLink to="/" class="logo-link">LiveApp</NuxtLink></h1>
      <ul v-if="userInfo.email" class="list">
        <li class="list-item"><NuxtLink class="list-link" to="/notification">通知</NuxtLink></li>
        <li class="list-item"><NuxtLink class="list-link" to="/profile">プロフィール</NuxtLink></li>
        <li class="list-item"><button class="list-link" @click='handleSignOut'>ログアウト</button></li>
      </ul>
      <ul v-else class="list">
        <li class="list-item"><NuxtLink class="list-link" to="/signIn">ログイン</NuxtLink></li>
        <li class="list-item"><NuxtLink class="list-link" to="/signUp">ユーザー登録</NuxtLink></li>
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
      })
      this.$router.push('/signIn');
    },
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
