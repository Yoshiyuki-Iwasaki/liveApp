<template>
  <section>
    <h2>ユーザ登録画面</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">メールアドレス:</label>
        <input id="email" v-model="email" type="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">パスワード:</label>
        <input id="password" v-model="password" type="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-info">登録する</button>
    </form>
  </section>
</template>

<script lang="js">
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'SignUpPage',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    registerUser() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
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
