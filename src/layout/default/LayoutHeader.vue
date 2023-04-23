<template>
  <el-header height="80px" class="header-container">
    <el-tabs v-model="activeTab" tab-position="top" @tab-click="handleClickTab" class="flex-1">
      <el-tab-pane v-for="item in panes" :key="item.key" :label="item.label" :name="item.key">
      </el-tab-pane>
    </el-tabs>
  </el-header>
</template>

<script setup>
  import { TabName } from '@/dict/constant'

  const router = useRouter()

  const panes = ref([
    { key: TabName.Certificate, label: '证书', name: TabName.Certificate },
    { key: TabName.Annex, label: '附件', name: TabName.Annex },
    { key: TabName.ModelDiagram, label: '模型图', name: TabName.ModelDiagram }
  ])
  const activeTab = ref(panes.value[0].name)

  const handleClickTab = e => {
    router.push({
      path: e.paneName
    })
  }
</script>
<style lang="scss" scoped>
  .el-header {
    @apply flex  items-center;
    padding: 10px 20px;
  }
</style>
