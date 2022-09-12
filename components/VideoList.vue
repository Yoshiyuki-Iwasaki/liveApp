
<template>
  <ul class="list">
    <li v-for="todo in todos" :key="todo.id" class="list-item">
      <a class="link" :href="'video/'+todo.id">
        <figure>
          <img src="@/assets/img/thumb.png" alt="">
        </figure>
        <div class="txt-area">
          <h2 class="title">{{ todo.ttl }}</h2>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'VideoListLayout',
  data() {
    return {
      todos: [
        { id: 1, ttl: 'Video名が入ります。Video名が入ります。'},
        { id: 2, ttl: 'Video名が入ります。Video名が入ります。'},
        { id: 3, ttl: 'Video名が入ります。Video名が入ります。'}
      ]
    };
  }
}
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
