const req = require.context('./', false, /\.svg$/)

// 导入所有
const importAll = r => {
  r.keys().forEach(r)
}

importAll(req)
