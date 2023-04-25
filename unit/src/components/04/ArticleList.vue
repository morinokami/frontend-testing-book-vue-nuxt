<script setup lang="ts">
import type { ItemProps } from './ArticleListItem.vue'
import ArticleListItem from './ArticleListItem.vue'

defineProps<{
  items: ItemProps[]
}>()
</script>

<template>
  <div>
    <h2>記事一覧</h2>
    <ul v-if="items.length">
      <ArticleListItem v-for="item in items" v-bind="item" :key="item.id" />
    </ul>
    <p v-else>投稿記事がありません</p>
  </div>
</template>
