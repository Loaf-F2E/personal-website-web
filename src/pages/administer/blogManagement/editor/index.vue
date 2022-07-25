<template>
  <div>写作</div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const { isEdit, id } = router.currentRoute.value.query
</script>
