
<template>
  <ul class="list">
    <li class="list-item">
      <a class="link" href="/video/1">
        <figure>
          <img src="@/assets/img/thumb.png" alt="">
        </figure>
        <div class="txt-area">
          <h2 class="title">Video名が入ります。Video名が入ります。Video名が入ります。Video名が入ります。</h2>
        </div>
      </a>
    </li>
    <li class="list-item">
      <a class="link" href="/video/2">
        <figure>
          <img src="@/assets/img/thumb.png" alt="">
        </figure>
        <div class="txt-area">
          <h2 class="title">Video名が入ります。Video名が入ります。Video名が入ります。Video名が入ります。</h2>
        </div>
      </a>
    </li>
    <li class="list-item">
      <a class="link" href="/video/3">
        <figure>
          <img src="@/assets/img/thumb.png" alt="">
        </figure>
        <div class="txt-area">
          <h2 class="title">Video名が入ります。Video名が入ります。Video名が入ります。Video名が入ります。</h2>
        </div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  column-gap: 5rem;
}

.list-item {
  flex-basis: 300px;
  border: .1rem solid #333;
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
