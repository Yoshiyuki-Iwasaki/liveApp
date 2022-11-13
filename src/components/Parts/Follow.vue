<template>
  <button v-if="follow[0]" @click='removeFollow(follow[0])'>フォロー済み</button>
  <button v-else @click='addFollow'>フォローボタン</button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Follow',
  props: ['follow', 'addFollow', 'removeFollow'],
})
</script>

<style scoped lang="scss">

</style>
