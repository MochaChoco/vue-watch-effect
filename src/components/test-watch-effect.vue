<script setup lang="ts">
import { watchEffect } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

watchEffect(() => {
  console.log('route path', route.path);
});
</script>

<template>
  <div>
    <RouterLink :to="'/watch-effect/' + (Number(route.params.id) + 1)"
      >링크 이동 {{ '/watch-effect/' + (Number(route.params.id) + 1) }}</RouterLink
    >
  </div>
</template>
