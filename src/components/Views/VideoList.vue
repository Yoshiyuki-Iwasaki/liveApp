
<template>
  <ul class="list">
    <li v-for="video in videos" :key="video.id" class="list-item">
      <NuxtLink class="link" :to="'video/'+video.id">
        <figure>
          <img :src=video.thumb :alt=video.ttl >
        </figure>
        <div class="txt-area">
          <h2 class="title">{{ video.ttl }}</h2>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, } from "firebase/storage";
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';

export default defineComponent({
  name: 'VideoListLayout',
  data() {
    return {
      videos: []
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(firebase, "videos"));
    const fbVideos = [];
    let thumbUrl;
    const storage = getStorage();
    getDownloadURL(ref(storage, 'images/thumb.png'))
      .then((url) => {
        thumbUrl = url;
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            ttl: doc.data().ttl,
            thumb: thumbUrl
          }
          fbVideos.push(todo);
        });
        this.videos = fbVideos;
      })
      .catch((error) => {
        console.log('error', error)
      });
  },
})
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;
}

.list-item {
  flex-basis: 300px;
  border: .1rem solid #333;
}

.link {
  display: block;
  height: 100%;
  transition: opacity 0.4s;

  &:hover {
    opacity: .6;
  }
}

.txt-area {
  margin: 1.5rem 1rem;
}

.title {
  font-size: 1.4rem;
  color: #333;
  line-height: 1.6;
}
</style>
