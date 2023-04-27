import transitionList from './src/index.vue'
import { withInstall } from '@/utils'

const comp = withInstall(transitionList)
export const TransitionList = comp
export default comp
