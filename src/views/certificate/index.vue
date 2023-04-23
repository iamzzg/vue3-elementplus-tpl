<template>
  <div class="certificate">
    <div class="certificate__page1">
      <p class="font-1-hao font-family-fangsong">中华人民共和国</p>
      <p class="text-gray-900 font-bold text-32pt mt-50px mb-0">建设项目</p>
      <p class="text-gray-900 font-bold text-32pt">用地预审与选址意见书</p>
      <p class="flex justify-end items-end pr-20px font-4-hao">
        <span>用字第</span>
        <span
          class="border-0 !border-b border-gray-400 border-solid pb-1px text-center w-200px mx-2"
          >xx</span
        >
        <span>号</span>
      </p>
      <p
        class="font-bold font-2-xiaohao leading-8 mt-50px px-100px indent-2em text-left leading-30pt">
        根据《中华人民共和国土地管理法》《中华人民共和国城乡规划法》和国家有关规定，经审核，本建设项目符合国土空间用途管制要求，核发此书。</p
      >
      <footer class="mt-auto mx-auto mb-100px flex flex-col font-3-hao">
        <p>核发机关</p>
        <p class="font-4-hao">
          <span class="date font-3-hao">日期</span>
          <span>xxx</span>
          年
          <span>xxx</span>
          月
          <span>xxx</span>
          日
        </p>
      </footer>
    </div>

    <div class="certificate__page2">
      <!-- <el-row>
        <el-col :span="1" class="px-1 break-words">基本情况</el-col>
        <el-col :span="22">
          <el-form :model="form" ref="formRef" :rules="rules" label-width="80px" :inline="false" size="default">
            <el-form-item label="项目名称">
              <el-input v-model="form.projectName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row> -->

      <table class="border-collapse w-full">
        <colgroup>
          <col span="1" />
          <col span="23" />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td dclass="px-1 break-words">基本情况</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>lorem </td>
          </tr>
          <tr>
            <td></td>
            <td> lorem</td>
          </tr>
          <tr>
            <td></td>
            <td> lorem</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  const formRef = ref(null)
  const form = ref({
    projectName: ''
  })

  const rules = ref({
    projectName: [{ require: true, message: '请输入项目名称', trigger: 'submit' }]
  })
  const onSubmit = () => {}
</script>
<style lang="scss" scoped>
  .certificate {
    @apply flex flex-col items-center;

    &__page1,
    &__page2 {
      width: 210mm;
      height: 297mm;
      border: 1px solid #888;
    }

    &__page1 {
      @apply flex flex-col items-center;

      text-align: center;
      margin-bottom: 20px;
      padding: 40px 0;

      .date {
        letter-spacing: 2em;
      }

      p {
        width: 100%;
      }

      footer {
        text-align: left;
        margin-left: 250px;
      }
    }

    &__page2 {
      padding: 20px;
      table {
        td {
          border: 1px solid #333;
        }
      }
    }
  }
</style>
