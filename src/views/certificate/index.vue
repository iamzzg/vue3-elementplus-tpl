<template>
  <div class="certificate">
    <div class="certificate__page1">
      <p class="font-1-hao font-family-fangsong">中华人民共和国</p>
      <p class="text-gray-900 font-bold text-32pt mt-50px mb-0">建设项目</p>
      <p class="text-gray-900 font-bold text-32pt">用地预审与选址意见书</p>
      <p class="flex justify-end items-end pr-20px font-4-hao">
        <span>用字第</span>
        <span
          class="border-0 !border-b border-gray-400 border-solid pb-1px text-center w-200px mx-2">
          xx
        </span>
        <span>号</span>
      </p>
      <p
        class="font-bold font-2-xiaohao leading-8 mt-50px px-100px indent-2em text-left leading-30pt">
        根据《中华人民共和国土地管理法》《中华人民共和国城乡规划法》和国家有关规定，经审核，本建设项目符合国土空间用途管制要求，核发此书。
      </p>
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
      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="0"
        :inline="false"
        size="default">
        <table class="border-collapse w-full">
          <tbody>
            <tr>
              <td class="px-1 break-words" rowspan="8">基本情况</td>
            </tr>
            <tr>
              <td>项目名称</td>
              <td>
                <el-form-item label="" prop="projectName">
                  <el-input v-model="form.projectName"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>项目代码</td>
              <td>
                <el-form-item label="" prop="projectCode">
                  <el-input v-model="form.projectCode"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>建设单位名称</td>
              <td>
                <el-form-item label="" prop="constructionUnitName">
                  <el-input v-model="form.constructionUnitName"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>项目建设依据</td>
              <td>
                <el-form-item label="" prop="projctConstructionBasis">
                  <el-input v-model="form.projctConstructionBasis"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>项目拟选位置</td>
              <td>
                <el-form-item label="" prop="projctLocation">
                  <el-input v-model="form.projctLocation"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>拟用地面积 (含各地类明细) </td>
              <td>
                <el-form-item label="" prop="proposedLandArea">
                  <el-input v-model="form.proposedLandArea"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td>拟建设规模</td>
              <td>
                <el-form-item label="" prop="proposedConstructionScale">
                  <el-input v-model="form.proposedConstructionScale"></el-input>
                </el-form-item>
              </td>
            </tr>
            <tr>
              <td colspan="3"> 附图及附件名称 </td>
            </tr>
          </tbody>
        </table>

        <header class="font-1-xiaohao font-bold mt-8">遵守事项</header>
        <p class="second-indent">
          一、本书是自然资源主管部门依法审核建设项目用地预审和规划选址的 法定凭据。
        </p>
        <p class="second-indent">二、未经依法审核同意本书的各项内容不得随意变更。</p>
        <p class="second-indent">
          三、本书所需附图及附件由相应权限的机关依法确定，与本书具有同等法律效力，附图指项目规划选址范围图，附件指建设用地要求。
        </p>
        <p class="second-indent">
          四、本书自核发起有效期三年，如对土地用途、建设项目选址等进行重大调整的，应当重新办理本书。
        </p>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default defineComponent({
    name: 'Certificate'
  })
</script>
<script setup>
  import { genFormModel, genFormRule, useForm } from '@/hooks/web/useForm'

  const { formRef } = useForm()
  const { formModel: form, resetFormModel } = genFormModel({
    projectName: '',
    projectCode: '',
    constructionUnitName: '',
    projctConstructionBasis: '',
    projctLocation: '',
    proposedLandArea: '',
    proposedConstructionScale: ''
  })

  const rules = genFormRule([
    'projectName',
    'projectCode',
    'constructionUnitName',
    'projctConstructionBasis',
    'projctLocation',
    'proposedLandArea',
    'proposedConstructionScale'
  ])
  const onSubmit = () => {
    formRef.value.validate()
  }
</script>
<style lang="scss" scoped>
  .certificate {
    @apply flex flex-col items-center;
    overflow-x: hidden;

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
        tr {
          &:first-child {
            td {
              width: calc(1 / 24 * 100%);
              line-height: 4;
            }
          }
          &:not(:first-child) {
            td {
              height: 76px;
              &:first-child {
                position: relative;
                width: calc(5 / 24 * 100%);
                padding-left: 10px;

                &::before {
                  content: '*';
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  color: red;
                }
              }
              &:nth-child(2) {
                padding: 0 20px;
              }
            }
          }

          &:last-child {
            height: 156px;
            td {
              &::before {
                display: none;
              }
            }
          }
        }
      }

      ::v-deep(.el-form-item) {
        margin-bottom: 0 !important;
      }
      .second-indent {
        text-indent: -2em;
        padding-left: 2em;
        line-height: 1.5;
      }
    }
  }
</style>
