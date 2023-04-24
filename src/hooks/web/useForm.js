import { isArray, isObject, isString } from '@/utils/validate'

export const useForm = () => {
  const formRef = ref(null)

  const validate = cb => {
    if (!formRef.value) console.log(new Error('error: 请绑定formRef'))
    return formRef.validate(cb)
  }

  const resetFields = () => {
    return formRef.resetFields()
  }

  const scrollToField = prop => {
    formRef.scrollToField(prop)
  }

  return {
    formRef,
    validate,
    resetFields,
    scrollToField
  }
}

/**
 *  返回可以设置初始值的 ref
 * @param {*} formModel plainObject
 * @returns 返回 {formModel: refModel,resetFormModel}
 */
export const genFormModel = formModel => {
  const oldVal = formModel

  const refModel = ref(formModel)

  const resetFormModel = value => {
    if (value) {
      refModel.value = value
    } else {
      refModel.value = oldVal
    }
  }

  return {
    formModel: refModel,
    resetFormModel
  }
}

/**
 *
 * @param {*} props [string,{prop:string,rules:{}}]
 */
export const genFormRule = props => {
  // 参数归一 [{prop,type,message,}]
  const ret = {}

  props.forEach(item => {
    if (isString(item)) {
      ret[prop] = {
        required: true,
        message: '该项是必填项',
        trigger: 'change'
      }
    } else if (isObject(item)) {
      let { prop, rules } = item
      rules = isArray(rules) ? rules : [rules]
      ret[prop] = rules
    }
  })

  return ret
}
