<!-- <template>
//   <transition name="fade-top" mode="out-in">

//   </transition>
// </template> -->

<script>
  export default defineComponent({
    name: 'TransitionList',
    setup(_, { slots }) {
      return () => {
        slots.map()
      }
    }
  })
</script>
