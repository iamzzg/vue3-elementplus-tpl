export const withInstall = (comp, alias) => {
  comp.install = app => {
    app.component(comp.name || comp.displayName, comp)

    if (alias) {
      app.globalProperties[alias] = comp
    }
  }
  return comp
}
