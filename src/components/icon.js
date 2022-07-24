import { createVNode } from 'vue'
import * as $Icon from '@ant-design/icons-vue'

const Icon = props => {
  const { icon } = props
  let antIcon = $Icon
  return createVNode(antIcon[icon])
}

export default Icon
