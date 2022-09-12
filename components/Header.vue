<template>
  <header>
    <div class="inner">
      <h1 class="title">Logo</h1>
      <ul class="list">
        <li class="list-item"><a class="list-link" href="/notification">通知</a></li>
        <li class="list-item"><a class="list-link" href="/profile">プロフィール</a></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.inner {
  margin: 0 auto;
  padding: 3rem 1.5rem;
  max-width: 1000px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
}

.list-link {
  font-size: 1.4rem;
  font-weight: 700;
}
</style>
