module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'fill',
          'fill-rule',
          'fill-in-customer-information',
          'id',
          'filter',
          'stroke-width',
          'stroke'
        ]
      }
    },
    {
      name: 'removeTitle'
    }
  ]
}
