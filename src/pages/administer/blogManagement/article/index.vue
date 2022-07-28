<template>
  <h1>文章管理</h1>
  <div class="header">
    <router-link
      v-slot="{ navigate }"
      target="_blank"
      :to="{
        name: 'editor',
        query: { type: 'create' }
      }"
    >
      <a class="link" target="_blank" @click="navigate">写文章</a></router-link
    >
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a-button type="link" @click="handleView">{{ record.name }}</a-button>
      </template>

      <template v-else-if="column.key === 'action'">
        <span>
          <a @click="handleEdit">修改</a>
          <a-divider type="vertical" />
          <a-button danger type="link">删除</a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleView = id => {
  router.push({ name: 'editor', query: { type: 'view', id } })
}
const handleEdit = id => {
  router.push({ name: 'editor', query: { type: 'edit', id } })
}
const data = [
  {
    name: 'test'
  }
]
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: ''
  },
  {
    title: '操作',
    key: 'action'
  }
]
</script>
<style scoped lang="less">
@import './index.less';
</style>
