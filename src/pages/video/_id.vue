<template>
  <section>
    <h1 class="ttl">Video詳細</h1>
    <div class="video-block">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="like-block">
      <h2 class="block-ttl">いいね</h2>
      <button>いいねマーク</button>
    </div>
    <div class="comment-block">
      <h2 class="block-ttl">コメント</h2>
      <p><input v-model="content" type="text" name="content"/></p>
      <ul class="list">
        <li v-for="comment in comments" :key="comment.id" class="list-item">
          <p class="list-txt">
            <span>{{comment.createdAt.toDate() | moment}}</span>
            <span>{{comment.text}}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import moment from 'moment';
import firebase from '@/firebase/firebase';

export default {
  name: 'VideoPage',
  filters: {
    moment (date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    }
  },
  data () {
    return {
      content: '',
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
  .video-block,
  .like-block,
  .comment-block {
    margin-top: 2rem;
  }

  .ttl {
    font-size: 2rem;
    font-weight: 700;
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
