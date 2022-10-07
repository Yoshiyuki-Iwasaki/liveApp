<template>
  <div class="comment-block">
    <h2 class="block-ttl">コメント</h2>
    <p><input v-model="content" type="text" name="content" /></p>
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
import { collection, getDocs } from "firebase/firestore";
import moment from 'moment';
import firebase from '@/firebase/firebase';

export default {
  name: 'Comment',
  filters: {
    moment(date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    }
  },
  data() {
    return {
      comments: []
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(firebase, "comments"));
    const fbComments = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        text: doc.data().text,
        createdAt: doc.data().createdAt,
      }
      fbComments.push(todo);
    });
    this.comments = fbComments;
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
