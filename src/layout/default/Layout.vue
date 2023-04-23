<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <LayoutHeader></LayoutHeader>
      <div class="main">
        <slot></slot>
      </div>
    </el-container>
  </div>
</template>

<script setup>
  import LayoutHeader from './LayoutHeader.vue'
</script>
<style lang="scss">
  .common-layout {
    .main {
      height: calc(100vh - 80px);
      overflow: auto;
      overflow-x: hidden;
    }
  }
</style>
