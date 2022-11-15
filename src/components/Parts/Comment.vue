<template>
  <div class="list-txt">
    <a :href="'/profile/' + comment.user_id">
      <span>{{ comment.createdAt && comment.createdAt.toDate() | moment }}</span>
      <span>{{ comment.user_id }}</span>
      <span>{{ comment.text }}</span>
    </a>
  </div>
</template>

<script>
import moment from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Comment',
  filters: {
    moment(date) {
      return moment(date).format('YYYY/MM/DD HH:mm');
    }
  },
  props: ['comment'],
})
</script>

<style scoped lang="scss">
.list-txt {}
</style>
