
<template>
  <VideoList :videos="videos" />
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, } from "firebase/storage";
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
import VideoList from '@/components/Templates/VideoList.vue'

export default defineComponent({
  name: 'VideoSec',
  components: {
    VideoList,
  },
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
