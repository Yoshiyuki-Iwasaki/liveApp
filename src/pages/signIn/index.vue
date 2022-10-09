<template>
  <section>
    <h2>ログイン画面</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">メールアドレス:</label>
        <input id="email" v-model="email" type="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">パスワード:</label>
        <input id="password" v-model="password" type="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-info">ログインする</button>
    </form>
  </section>
</template>

<script lang="js">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
  name: 'SignInPage',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    loginUser() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password).catch(function (error) {
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
