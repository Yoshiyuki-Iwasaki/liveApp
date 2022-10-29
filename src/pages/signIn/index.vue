<template>
  <div class="inner">
    <h1 class="ttl">ログイン画面</h1>
    <p v-if="errorMsg" class="errorMsg">{{errorMsg}}</p>
    <form class="form" @submit.prevent="loginUser">
      <div class="form-list">
        <label class="form-label" for="email">メールアドレス:</label>
        <input id="email" v-model="email" class="form-input" type="email">
      </div>
      <div class="form-list">
        <label class="form-label" for="password">パスワード:</label>
        <input id="password" v-model="password" class="form-input" type="password">
      </div>
      <div class="link-wrap">
        <NuxtLink to="/passwordReset">パスワードを忘れた場合</NuxtLink>
      </div>
      <div class="btn-wrap">
        <button type="submit" class="btn">ログインする</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { defineComponent } from 'vue';
let auth;
export default defineComponent({
  data() {
    return {
      userInfo: [],
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.push('/');
      }
    })
  },
  methods: {
    loginUser() {
      const auth = getAuth();
      const self = this; // thisのreference用変数(self)作成
      signInWithEmailAndPassword(auth, this.email, this.password)
        .catch(function (error) {
          switch (error.code) {
            case "auth/invalid-email":
              self.errorMsg = '正しいメールアドレスを入力してください。.'
              break;
            case "auth/user-not-found":
              self.errorMsg = '入力いただいたメールアドレスを使用するアカウントは見つかりませんでした。'
              break;
            case "auth/wrong-password":
              self.errorMsg = 'パスワードが誤ってます。'
              break;
            default:
              self.errorMsg = '正しいメールアドレスとパスワードを入力してください。'
            break;
          }
        });
    }
  }
})
</script>

<style scoped lang="scss">
.inner {
  margin: 0 auto;
  padding: 4rem 3rem;
  width: 45rem;
  border: 0.2rem solid #333;
}
.ttl {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
}
.errorMsg {
  font-size: 1.2rem;
  color: red;
  font-weight: 700;
  line-height: 1.4;
}
.form {
  margin-top: 3rem;
}
.form-list {
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
}
.form-label {
  width: 30%;
  font-size: 1.4rem;
}
.form-input {
  padding: .5rem;
  width: 70%;
  border: .1rem solid #333;
  font-size: 1.4rem;
}
.link-wrap {
  text-align: center;
}
.btn-wrap {
  margin-top: 2rem;
  text-align: center;
}
.btn {
  padding: 1.2rem 2rem;
  border-radius: 1.5rem;
  background: #333;
  color: #ffff;
  font-size: 1.3rem;
}
</style>
