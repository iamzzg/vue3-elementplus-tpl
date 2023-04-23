export default app => {
  const requireContext = require.context('./', true, /index\.js$/)

  const importAll = r => {
    r.keys().forEach(key => {
      const mod = r(key)
      app.use(mod.default)
    })
  }
  importAll(requireContext)
}
