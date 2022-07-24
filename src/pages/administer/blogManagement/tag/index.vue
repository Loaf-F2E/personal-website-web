<template>
  <h1>文章管理</h1>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a-tag :color="record.color">{{ record.name }}</a-tag>
      </template>
      <template v-else-if="column.key === 'color'">
        <div
          style="width: 16px; height: 16px"
          :style="{ background: record.color }"
        ></div>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>修改</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
const data = [
  {
    name: 'name',
    color: 'orange'
  }
]
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '颜色',
    dataIndex: 'color',
    key: 'color'
  },
  {
    title: '操作',
    key: 'action'
  }
]
</script>
