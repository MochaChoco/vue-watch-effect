<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

watch([route], () => {
  console.log('route path', route.path);
});
</script>

<template>
  <div>
    <RouterLink :to="'/watch/' + (Number(route.params.id) + 1)"
      >링크 이동 {{ '/watch/' + (Number(route.params.id) + 1) }}</RouterLink
    >
  </div>
</template>
