<template>
  <el-config-provider :z-index="zIndex" :size="size" :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import { ElConfigProvider } from 'element-plus'
  import appSetting from './settings/appSetting'

  const { zIndex, size, locale } = appSetting
</script>
<style lang="scss">
  #app {
    height: 100%;
    overflow-x: hidden !important;
  }
</style>
