<template>
  <ul class="list">
    <li v-for="comment in comments" :key="comment.id" class="list-item">
      <Comment :comment="comment" />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import Comment from '~/components/Parts/Comment.vue';

export default defineComponent({
  name: 'CommentList',
  components: {
    Comment,
  },
  props: ['comments'],
})
</script>

<style scoped lang="scss">
.list {
  margin-top: 1rem;
}

.list-item {
  margin-top: 1rem;
}
</style>
