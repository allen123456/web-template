import { Dialog, Toast, Notify } from 'vant'

function dialog({ type = 'alert', title = '', message = '' } = {}) {
  return new Promise(function(resolve, reject) {
    if (type === 'alert') {
      Dialog.alert({
        title: title,
        message: message
      }).then(() => {
        resolve()
      })
    } else if (type === 'confirm') {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(() => {
          resolve()
        })
        .catch(() => {
          reject()
        })
    }
  })
}

export { dialog }

function toast({ message = '', success = '', fail = '', loading = '' } = {}) {
  if (message !== '') {
    Toast(message)
  } else if (success !== '') {
    Toast.success(success)
  } else if (fail !== '') {
    Toast.fail(fail)
  } else if (loading !== '') {
    return Toast.loading({
      forbidClick: true,
      duration: 0,
      message: loading
    })
  }
}

export { toast }

function notify({ message = '', duration = 1000, background = '#1989fa', color = '#fff' } = {}) {
  return Notify({
    message: message,
    duration: duration,
    background: background,
    color: color
  })
}

export { notify }
