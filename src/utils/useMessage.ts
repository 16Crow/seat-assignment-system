import { ElMessage } from 'element-plus'
import { markRaw, Ref } from 'vue'
// element-plus 中每个 icon 都是一个 Vue 组件
import {
  SuccessFilled,
  WarningFilled,
  CircleCloseFilled,
  InfoFilled,
} from '@element-plus/icons-vue'

// 定义 icon 映射关系
const iconMap: Record<string, Ref> = {
  success: markRaw(SuccessFilled),
  warning: markRaw(WarningFilled),
  error: markRaw(CircleCloseFilled),
  info: markRaw(InfoFilled),
}

// 提示信息参数类型
interface IMessageParams {
  // 提示类型必须是 iconMap 的 key
  type: keyof typeof iconMap
  message: string
  duration?: number // 显示持续时间，单位为ms，默认为 3000ms
}

const showMessage = ({ type, message, duration = 3000 }: IMessageParams) => {
  // 根据参数，弹出提示信息
  ElMessage({
    icon: iconMap[type],
    message,
    duration,
    customClass: 'fm-light-message ' + String(type),
  })
}

export { showMessage }