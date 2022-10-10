<template>
  <div class="inner">
    <h1 class="ttl">ユーザ登録画面</h1>
    <form class="form" @submit.prevent="registerUser">
      <div class="form-list">
        <label class="form-label" for="email">メールアドレス:</label>
        <input id="email" v-model="email" type="email" class="form-input">
      </div>
      <div class="form-list">
        <label class="form-label" for="password">パスワード:</label>
        <input id="password" v-model="password" type="password" class="form-input">
      </div>
      <div class="btn-wrap">
        <button type="submit" class="btn">登録する</button>
      </div>
    </form>
  </div>
</template>

<script lang="js">
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'SignUpPage',
  methods: {
    registerUser() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(function () {
          this.$router.push('/signIn');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('errorCode', errorCode);
          console.log('errorMessage', errorMessage);
        });
    },
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
