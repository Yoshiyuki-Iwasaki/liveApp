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
      <div class="btn-wrap">
        <button type="submit" class="btn">ログインする</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const email = ref('');
const errorMsg = ref('');
const password = ref('');

const loginUser = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(function () {
      this.$router.push('/');
    })
    .catch(function (error) {
      switch (error.code) {
        case "auth/invalid-email":
          errorMsg.value = 'Invalid email.'
          break;
        case "auth/user-not-found":
          errorMsg.value = 'No account with that email was found.'
          break;
        case "auth/wrong-password":
          errorMsg.value = 'Incorrect password.'
          break;
        default:
          errorMsg.value = 'Email or password was incorrect.'
          break;
      }
    });
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
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
}
.errorMsg {
  font-size: 1.2rem;
  color: red;
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
