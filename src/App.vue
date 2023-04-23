<template>
  <el-config-provider :z-index="zIndex" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script setup>
  import { ElConfigProvider } from 'element-plus'
  import appSetting from './settings/appSetting'

  const { zIndex, size } = appSetting
</script>
<style lang="scss">
  #app {
    height: 100%;
    overflow-x: hidden !important;
  }
</style>
