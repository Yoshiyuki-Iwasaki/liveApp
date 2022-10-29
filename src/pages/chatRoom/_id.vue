<template>
  <div>
    <h1 class="ttl">チャット</h1>
    <ul class="list">
      <li v-for="chat in chats" :key="chat.id" class="list-item">
        <div class="list-txt">
          <span>{{ chat.createdAt.toDate() | moment }}</span>
          <a :href="'/profile/' + chat.user_id"><span>{{ chat.user_id }}</span></a>
          <span>{{ chat.text }}</span>
        </div>
      </li>
    </ul>
    <p><input v-model='txt' placeholder='txt' type="text" name="txt" /><button @click='addChat'>登録</button></p>
  </div>
</template>

<script lang="js">
import { collection, getDocs, addDoc, where, query, serverTimestamp } from "firebase/firestore";
import moment from 'moment';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { defineComponent } from 'vue';
import firebase from '@/firebase/firebase';
let auth;
export default defineComponent({
  name: 'ChatRoomPage',
  components: {
  },
  filters: {
    moment(date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    }
  },
  data () {
    return {
      txt: '',
      chats: [],
      userInfo: [],
    }
  },
  async mounted() {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userInfo = [];
      if (user) {
        this.userInfo = user
      }
    })
    const chatsQuery = query(collection(firebase, "chat"), where("video_id", "==", this.$router.history.current.params.id));
    const chatsQuerySnapshot = await getDocs(chatsQuery);
    const fbChats = [];
    chatsQuerySnapshot.forEach((docs) => {
      const chat = {
        id: docs.id,
        text: docs.data().text,
        video_id: docs.data().video_id,
        user_id: docs.data().user_id,
        createdAt: docs.data().createdAt,
      }
      fbChats.push(chat);
    });
    this.chats = fbChats;
  },
  methods: {
    async addChat() {
      await addDoc(collection(firebase, "chat"), {
        text: this.txt,
        video_id: this.$router.history.current.params.id,
        user_id: this.userInfo.uid,
        createdAt: serverTimestamp()
      });
      this.txt = '';
    }
  },
})
</script>

<style scoped lang="scss">
.ttl {
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}
</style>
