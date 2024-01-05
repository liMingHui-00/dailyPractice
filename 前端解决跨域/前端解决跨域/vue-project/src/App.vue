<template>
  <div>
    55555
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
onMounted(async () => {
  const res = await axios.get('/api/stu')
  console.log(res)
})
</script>

