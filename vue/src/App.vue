<template>
  app
</template>
<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
onMounted(async () => {
  const data = await axios('http://localhost:3000/stu')
  console.log(data)
})

</script>

