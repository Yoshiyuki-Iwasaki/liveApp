<template>
  <div class="comment-block">
    <h2 class="block-ttl">コメント</h2>
    <p><input v-model='txt' placeholder='txt' type="text" name="txt" /><button @click='addComment'>登録</button></p>
    <ul class="list">
      <li v-for="comment in comments" :key="comment.id" class="list-item">
        <p class="list-txt">
          <span>{{comment.createdAt.toDate() | moment}}</span>
          <span>{{comment.text}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { collection, getDocs, addDoc, where, query, serverTimestamp } from "firebase/firestore";
import moment from 'moment';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import firebase from '@/firebase/firebase';
let auth;
export default {
  name: 'Comment',
  filters: {
    moment(date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    }
  },
  data() {
    return {
      txt: '',
      comments: [],
      userInfo: [],
    }
  },
  async mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userInfo = user
      }
    })
    const q = query(collection(firebase, "comments"), where("video_id", "==", this.$router.history.current.params.id));
    const querySnapshot = await getDocs(q);
    const fbComments = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        text: doc.data().text,
        video_id: doc.data().video_id,
        createdAt: doc.data().createdAt,
      }
      fbComments.push(todo);
    });
    this.comments = fbComments;
  },
  methods: {
    async addComment () {
      await addDoc(collection(firebase, "comments"), {
        text: this.txt,
        video_id: this.$router.history.current.params.id,
        user_id: this.userInfo.uid,
        createdAt: serverTimestamp()
      });
      this.txt = '';
    }
  },
}
</script>

<style scoped lang="scss">
.comment-block {
  margin-top: 2rem;
}

.block-ttl {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.list {
  margin-top: 1rem;
}

.list-item {
  margin-top: 1rem;
}
</style>
