<template>
  <div class="header">
    <a-input
      :disabled="isView"
      class="input"
      placeholder="输入文章标题..."
    ></a-input>
    <div class="tag">
      标签：
      <a-select
        ref="select"
        v-model:value="tag"
        style="width: 160px"
        :disabled="isView"
        placeholder="请选择文章所属标签"
        @change="handleChange"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </div>
    <a-button v-if="!isView" class="btn" @click="handleSubmit">{{
      typeMap[type]
    }}</a-button>
  </div>

  <v-md-preview v-if="isView" :text="text"></v-md-preview>
  <v-md-editor v-else v-model="text" height="1000px"></v-md-editor>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const text = ref('# 一、合成事件和生命周期函数里是异步的')
const tag = ref('')
const router = useRouter()
const { type, id } = router.currentRoute.value.query
const isView = type === 'view'
const typeMap = {
  create: '发布',
  edit: '保存'
}

const handleChange = value => {
  console.log(`selected ${value}`)
}

const handleSubmit = () => {
  console.log('text :>> ', text)
}
</script>
<style scoped lang="less">
@import './index.less';
</style>
