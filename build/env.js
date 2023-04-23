// 处理 环境变量 成数据,只处理基本类型
exports.loadEnv = () => {
  const VUE_APP_OBJECT = {}
  const VUE_APP_KEYs = Object.keys(process.env).filter(key => key.startsWith('VUE_APP'))

  VUE_APP_KEYs.forEach(key => {
    let val = process.env[key]

    if (['true', 'false'].includes(val)) {
      val = JSON.parse(val)
    } else if (/^\d+$/.test(val)) {
      val = +val
    }

    const camelCaseKey = transformCamelCase(key.replace('VUE_APP_', ''))

    VUE_APP_OBJECT[camelCaseKey] = val
  })
  return VUE_APP_OBJECT
}

// BASE_API => baseApi
function transformCamelCase(str, spliter = '_') {
  const parts = str.split(spliter)
  let [first, ...other] = parts
  first = first.toLowerCase()
  other = other.map(key => key[0].toUpperCase() + key.slice(1).toLowerCase())
  return [first, ...other].join('')
}
