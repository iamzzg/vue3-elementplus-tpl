<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="route.meta.openCache" :include="getCaches">
          <component :is="Component" :key="route.fullPath"></component>
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath"></component>
      </transition>
    </template>
  </router-view>
</template>

<script setup>
  import { computed } from 'vue'
  const getCaches = computed(() => {
    return []
  })
</script>
