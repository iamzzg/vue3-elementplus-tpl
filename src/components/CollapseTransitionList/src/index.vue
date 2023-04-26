<script>
  export default defineComponent({
    name: 'CollapseTransitionList',
    setup(props, { slots }) {
      function render() {
        if (slots?.default) {
          return slots.default().map(vnode => {
            return <ElCollapseTransition>{vnode}</ElCollapseTransition>
          })
        } else {
          return null
        }
      }

      return () => render()
    }
  })
</script>
