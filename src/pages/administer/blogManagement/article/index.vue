<template>
  <h1>文章管理</h1>
  <div class="header">
    <router-link
      v-slot="{ navigate }"
      target="_blank"
      :to="{
        name: 'editor',
        query: { isEdit: false }
      }"
    >
      <a class="link" target="_blank" @click="navigate">写文章</a></router-link
    >
  </div>
  <a-table :columns="columns" :data-source="data" />
</template>

<script setup>
const data = []
const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: ''
  },
  {
    title: '操作'
  }
]
</script>
<style scoped lang="less">
@import './index.less';
</style>
