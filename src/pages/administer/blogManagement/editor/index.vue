<template>
  <div class="header">
    <a-input class="input" placeholder="输入文章标题..."></a-input>
    <div class="tag">
      标签：
      <a-select
        ref="select"
        v-model:value="tag"
        style="width: 160px"
        placeholder="请选择文章所属标签"
        @change="handleChange"
      >
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </div>
    <a-button class="btn" @click="handleSubmit">{{
      isEdit === 'false' ? '发布' : '保存'
    }}</a-button>
  </div>

  <v-md-editor v-model="text" height="1000px"></v-md-editor>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const text = ref('# 一、合成事件和生命周期函数里是异步的')
const tag = ref('')
const router = useRouter()
const { isEdit, id } = router.currentRoute.value.query

console.log('isEdit :>> ', typeof isEdit)

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
