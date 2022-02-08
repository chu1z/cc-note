
import { createApp } from 'vue'
import { AlertType } from './type'
import Alert from './Alert.vue'

const max = 10
const pool:HTMLDivElement[] = []
for (let i = 0; i < max; i++) {
  pool.push(document.createElement('div'))
}

const pop = () => {
  if (pool.length > 0) {
    return pool.pop() as HTMLDivElement
  } else {
    return document.createElement('div')
  }
}

const push = (obj:HTMLDivElement) => {
  pool.push(obj)
}

const createAlert = (message: string, type: AlertType, timeout = 2000) => {
  const alertIns = createApp(Alert, {
    message,
    type
  })

  const mountNode = pop()
  document.body.appendChild(mountNode)
  alertIns.mount(mountNode)

  setTimeout(() => {
    alertIns.unmount()
    document.body.removeChild(mountNode)
    push(mountNode)
  }, timeout)
}

export default createAlert
