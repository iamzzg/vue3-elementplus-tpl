<script>
  export default defineComponent({
    name: 'CollapseTransitionList',
    emits: ['transitionEnd'],
    setup(props, { slots, emit }) {
      const emitTransition = () => {
        emit('transitionEnd')
      }
      function render() {
        if (slots?.default) {
          return slots.default().map(vnode => {
            return (
              <ElCollapseTransition onAfterEnter={emitTransition}>{vnode}</ElCollapseTransition>
            )
          })
        } else {
          return null
        }
      }

      return () => render()
    }
  })
</script>
