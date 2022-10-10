<template>
  <div class="inner">
    <h1 class="ttl">ログイン画面</h1>
    <form class="form" @submit.prevent="loginUser">
      <div class="form-list">
        <label class="form-label" for="email">メールアドレス:</label>
        <input id="email" v-model="email" class="form-input" type="email">
      </div>
      <div class="form-list">
        <label class="form-label" for="password">パスワード:</label>
        <input id="password" v-model="password" class="form-input" type="password">
      </div>
      <div class="btn-wrap">
        <button type="submit" class="btn">ログインする</button>
      </div>
    </form>
  </div>
</template>

<script lang="js">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'SignInPage',
  methods: {
    loginUser() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(function () {
          this.$router.push('/');
        })
        .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
  },
}
</script>

<style scoped lang="scss">
.inner {
  margin: 0 auto;
  padding: 2rem;
  width: 40rem;
  border: .1rem solid #333;
}
.ttl {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
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
