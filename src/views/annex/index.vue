<template>
  <div class="annex">
    <div class="page">
      <header class="font-4-hao text-left w-full">《建设项目用地预审与选址意见书》附件</header>

      <el-form
        :model="form"
        ref="formRef"
        :rules="rules"
        label-width="0"
        :inline="false"
        size="default">
        <p class="!text-20pt font-bold black text-center">**建设项目用地预审选址要求</p>

        <CollapseTransitionList ref="collapseRef">
          <p class="paragraph" v-show="showObj.show1">
            一、**建设项目（统一项目代码：**）已经市/区发展改革委批复项目建议书/同意立项/同意开展前期工作/已列入《**规划》（均需注明文名、文号）。（招拍挂项目还应表述）该项目为招拍挂出让项目。项目选址位于
            <el-form-item prop="projectSiteSelection">
              <el-input v-model="form.projectSiteSelection"></el-input>
            </el-form-item>
            区（新区、合作区）境内。
          </p>
          <section v-show="showObj.show2">
            <p class="paragraph">
              二、（地面层、高架层表述）项目拟用地总面积
              <el-form-item prop="totalArea">
                <el-input v-model="form.totalArea"></el-input>
              </el-form-item>
              公顷，其中农用地
              <el-form-item prop="areaOfAgriculturalLand">
                <el-input v-model="form.agriLandArea"></el-input>
              </el-form-item>
              公顷（耕地
              <el-form-item prop="arableLandArea">
                <el-input v-model="form.arableLandArea"></el-input>
              </el-form-item>
              公顷，园地
              <el-form-item prop="parkArea">
                <el-input v-model="form.parkArea"></el-input>
              </el-form-item>
              公顷，林地
              <el-form-item prop="forestArea">
                <el-input v-model="form.forestArea"></el-input>
              </el-form-item>
              公顷，其他农用地
              <el-form-item prop="otherAgriArea">
                <el-input v-model="form.otherAgriArea"></el-input>
              </el-form-item>
              公顷），建设用地
              <el-form-item prop="constructionLandArea">
                <el-input v-model="form.constructionLandArea"></el-input>
              </el-form-item>
              公顷，未利用地
              <el-form-item prop="unusedLandArea">
                <el-input v-model="form.unusedLandArea"></el-input>
              </el-form-item>
              公顷，不涉及围填海，不占用基本农田。
            </p>
            <p class="paragraph">
              <el-tooltip
                class="box-item"
                :content="`${showObj.show2Sub ? '隐藏' : '显示'}地下层、隧道表述`"
                placement="top-start">
                <el-icon
                  :class="['remove-icon', !showObj.show2Sub && 'hide']"
                  @click="showObj.show2Sub = !showObj.show2Sub">
                  <Remove v-if="showObj.show2Sub" />
                  <CirclePlus v-else />
                </el-icon>
              </el-tooltip>
              <span :class="showObj.show2Sub ? '' : 'text-[#aaa]'"
                >（地下层、隧道表述，不涉及的无需表述）</span
              >
              <span v-show="showObj.show2Sub" class="delete-line">
                项目拟使用地下空间
                <el-form-item prop="undergroundSpace">
                  <el-input v-model="form.undergroundSpace"></el-input>
                </el-form-item>
                公顷，其中地下一层为
                <el-form-item prop="firstBasementLevel">
                  <el-input v-model="form.firstBasementLevel"></el-input>
                </el-form-item>
                公顷，地下二层为
                <el-form-item prop="secondBasementFloor">
                  <el-input v-model="form.secondBasementFloor"></el-input>
                </el-form-item>
                公顷……。/项目隧道用地
                <el-form-item prop="tunnelLand">
                  <el-input v-model="form.tunnelLand"></el-input>
                </el-form-item>
                公顷。拟用地平面投影面积
                <el-form-item prop="tunnelLand">
                  <el-input v-model="form.tunnelLand"></el-input>
                </el-form-item>
                平方米，空间体积
                <el-form-item prop="tunnelLand">
                  <el-input v-model="form.tunnelLand"></el-input>
                </el-form-item>
                立方米，标高范围（黄海高程）
                <el-form-item prop="tunnelLand">
                  <el-input v-model="form.tunnelLand"></el-input>
                </el-form-item>
                米。
              </span>
            </p>
            <p class="paragraph">
              在初步设计阶段，要从严控制建设用地规模，节约集约利用土地。未取得建设用地批准手续的不得开工建设。
            </p>
          </section>

          <p class="paragraph" v-show="showObj.show3">
            三、（规划依据情况。/对城市规划、土地利用总体规划相关情况进行说明，必须明确说明符合相关规划。）
          </p>
          <p class="paragraph" v-show="showObj.show3">
            四、（对项目是否涉及压占已预审选址、已农转用、已出让项目进行说明，并明确告知建设单位下一步需要开展的工作。）
          </p>
          <p class="paragraph" v-show="showObj.show3">
            五、（对项目是否位于地质灾害易发区、是否压覆重要矿产资源进行说明，并明确告知建设单位下一步需要开展的工作。）
          </p>
          <p class="paragraph" v-show="showObj.show3">
            六、（对项目土壤修复情况进行说明，并明确告知建设单位下一步需要开展的工作。/对项目是否涉及占压地下水监测等地质环境监测设施进行说明，并明确告知建设单位下一步需要开展的工作。/告知海绵城市相关要求。）
          </p>
          <p class="paragraph" v-show="showObj.show3">
            七、（相邻空间利用关系）项目与以下地块存在相邻空间关系（按照东、南、西、北、上、下顺序）：
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            、
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            、
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input> </el-form-item
            >、
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input> </el-form-item
            >、
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            、
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            。 （如涉及平面投影重叠）项目与
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            项目平面投影重叠
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            平方米；与
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            项目平面投影重叠
            <el-form-item prop="tunnelLand">
              <el-input v-model="form.tunnelLand"></el-input>
            </el-form-item>
            平方米。本地块与上述地块在竖向空间上均不存在实质重叠情况。项目实施前和竣工后你单位需协调好各方关系，尽量避开已批土地及建筑物，避免收地事宜。
          </p>
          <p class="paragraph" v-show="showObj.show4">
            八、（如涉及轨道控制区）本地块进入
            规划控制区，在办理该项目《建设工程规划许可证》前应取得轨道建设运营单位的书面同意意见。
          </p>
          <p class="paragraph" v-show="showObj.show4">
            九、（如涉及有关专项规划）请贵单位进一步处理好项目与电力、通信、给排水等市政设施及公共服务设施的协调关系/严格落实环境保护措施，将项目建设及运营过程中产生的环境污染危害减至最低/认真做好消防、抗震和地质灾害防治等相关措施，最大限度降低灾害可能造成的损失/处理好项目与沿线风景名胜、文物古迹及历史文化保护的关系，尽量避免项目建设对风景名胜区、旅游区造成不利影响。……请贵单位严格遵守有关法律法规，依法取得环境、规划、施工等各类许可文件。
          </p>
          <p class="paragraph" v-show="showObj.show4">
            十、《建设项目用地预审与选址意见书》不代表土地使用权出让，具体以后续政府批准为准。
          </p>
        </CollapseTransitionList>
        <p class="text-center">
          <el-button
            v-show="!showObj.show4"
            type="primary"
            size="default"
            @click="showNext()"
            plain
            class="w-full">
            <el-icon><ArrowDown /></el-icon>
          </el-button>
        </p>

        <p class="text-right">深圳市前海深港现代服务业合作区管理局</p>
        <p class="text-right">{{ getDateYYYYMMDD }}</p>

        <div class="text-center">
          <el-button type="primary" @click="onSubmit" :disabled="currentIndex !== 4"
            >立即创建</el-button
          >
          <el-button>取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default defineComponent({
    name: 'Annex'
  })
</script>
<script setup>
  import { Remove, CirclePlus, ArrowDown } from '@element-plus/icons-vue'
  import { CollapseTransitionList } from '@/components/CollapseTransitionList'
  import { genFormModel, genFormRule, useForm } from '@/hooks/web/useForm'
  import { useDate } from '@/hooks/web/useDate'

  const { getDateYYYYMMDD } = useDate()
  const { formRef } = useForm()
  const { formModel: form } = genFormModel({
    projectSiteSelection: '',
    totalArea: '',
    areaOfAgriculturalLand: '',
    projctConstructionBasis: '',
    projctLocation: '',
    proposedLandArea: '',
    proposedConstructionScale: ''
  })

  const rules = genFormRule([
    'projectSiteSelection',
    'totalArea',
    'areaOfAgriculturalLand',
    'projctConstructionBasis',
    'projctLocation',
    'proposedLandArea',
    'proposedConstructionScale'
  ])

  const collapseRef = ref(null)

  const showObj = ref({
    show1: true,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show2Sub: true
  })

  const onSubmit = () => {
    // formRef.value.validate()
  }
  let currentIndex = 1
  let showNext = null
  onMounted(() => {
    showNext = (() => {
      console.log(collapseRef.value)
      const len = collapseRef.value.$slots.default().length
      return (endIndex = len) => {
        if (currentIndex > endIndex) return
        currentIndex++

        showObj.value[`show${currentIndex}`] = true
        return currentIndex
      }
    })()
  })
</script>
<style lang="scss" scoped>
  .annex {
    @apply flex flex-col items-center;
    overflow-x: hidden !important;

    .page {
      width: 210mm;
      overflow-x: hidden !important;

      p {
        @extend .font-3-hao;

        .delete-line {
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }
        line-height: 1.5;
        ::v-deep(.el-form-item) {
          display: inline-block;
          margin: 0 20px;
        }
      }

      .paragraph {
        text-indent: 2em;

        &.hide {
          margin: 0;
        }

        .remove-icon {
          cursor: pointer;
          color: red;

          &.hide {
            color: $primary;
          }

          & + span {
            user-select: none;
          }

          &:hover {
            & ~ span {
              transition: background-color 0.3s linear;
              background-color: red;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
