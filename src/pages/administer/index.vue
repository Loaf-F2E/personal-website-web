<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        theme="dark"
        mode="inline"
        @click="handleClick"
        @open-change="openChange"
      >
        <div v-for="(items, index) in administerRouterList" :key="index">
          <a-sub-menu
            v-if="items.children"
            :key="index"
            @title-click="titleClick"
          >
            <template #icon>
              <Icon :icon="items.icon"></Icon>
            </template>
            <template #title>{{ items.title }}</template>
            <a-menu-item v-for="item in items.children" :key="item.path">
              <Icon :icon="item.icon"></Icon>
              <router-link style="margin-left: 10px" :to="{ path: item.path }">
                {{ item.title }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else key="{{item.path}}">
            <Icon :icon="items.icon"></Icon>
            <router-link style="margin-left: 10px" :to="{ path: items.path }">
              {{ items.title }}
            </router-link>
          </a-menu-item>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { administerRouterList } from 'constants'
import Icon from 'components/icon'

const selectedKeys = ref([])
const openKeys = ref([])
const collapsed = ref(false)

const handleClick = e => {
  // console.log('click', e)
}

const openChange = e => {
  openKeys.value = e
}

const titleClick = e => {
  // console.log('titleClick', e)
}

watch(
  () => openKeys,
  val => {
    console.log('openKeys :>> ', val)
  }
)
</script>

<style scoped>
@import './index.less';
</style>
