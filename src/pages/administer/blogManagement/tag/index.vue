<template>
  <h1>标签管理</h1>
  <div class="header">
    <a-button @click="showModal('add')">添加</a-button>
  </div>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a-tag :color="record.color">{{ record.name }}</a-tag>
      </template>
      <template v-else-if="column.key === 'color'">
        <div style="display: flex; align-items: center">
          <div
            style="width: 16px; height: 16px; margin-right: 4px"
            :style="{ background: record.color }"
          ></div>
          <div>{{ record.color }}</div>
        </div>
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

  <a-modal
    v-model:visible="visible"
    :title="type + '标签'"
    ok-text="确定"
    cancel-text="取消"
    @ok="handleOk"
  >
    <a-form
      :model="formState"
      name="tag"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-form-item
        label="标签名称"
        name="name"
        :rules="[{ required: true, message: '请输入你的标签名称!' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item
        label="标签颜色"
        name="color"
        :rules="[{ required: true, message: '请选择你的标签颜色!' }]"
      >
        <color-picker
          v-model:pureColor="formState.color"
          style="border-radius: 0"
          format="hex6"
          shape="square"
          use-type="both"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, ref, watchEffect } from 'vue'
import { ColorPicker } from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'

const visible = ref(false)
const type = ref('')
const typeMap = {
  add: '添加',
  edit: '修改'
}
const showModal = t => {
  visible.value = true
  type.value = typeMap[t]
}
const handleOk = e => {
  console.log('formState', formState)
  visible.value = false
}
const formState = reactive({
  name: '',
  color: ''
})

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

// watchEffect(() => {
//   console.log('formState', formState)
// })
</script>

<style scoped lang="less">
@import './index.less';
</style>

<!-- 
  光圈f2
  快门速度 焦距倒数20s
  感光度3200、6400
-->
