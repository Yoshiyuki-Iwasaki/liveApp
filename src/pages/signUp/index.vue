<template>
  <div class="inner">
    <h1 class="ttl">ユーザ登録画面</h1>
    <p v-if="errorMsg" class="errorMsg">{{errorMsg}}</p>
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

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      userInfo: [],
      email: '',
      password: '',
      errorMsg: '',
    }
  },
  methods: {
    registerUser() {
      const auth = getAuth();
      const self = this; // thisのreference用変数(self)作成
      const router = this.$router; // thisのreference用変数(self)作成
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(function () {
          self.email = '';
          self.password = '';
          router.push('/signIn');
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              self.errorMsg = '正しいメールアドレスを入力してください。.'
              break;
            case "auth/email-already-in-use":
              self.errorMsg = 'すでに登録されているメールアドレスです'
              break;
            default:
              self.errorMsg = error.code
              console.log('error', error);
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

.errormsg {
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
