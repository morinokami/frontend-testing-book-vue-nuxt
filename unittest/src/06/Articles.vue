<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  items: { id: number; title: string }[]
  isLoading?: boolean
}>()
</script>

<template>
  <p v-if="isLoading">...loading</p>
  <div v-else>
    <h2>記事一覧</h2>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">
        <a :href="`/articles/${item.id}`">{{ item.title }}</a>
      </li>
    </ul>
    <p v-else>投稿記事がありません</p>
  </div>
</template>

<style></style>
