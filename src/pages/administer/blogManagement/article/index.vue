<template>
  <!-- <h1>文章管理</h1> -->
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
