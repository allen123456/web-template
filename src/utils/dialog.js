import { Dialog } from 'vant'

export default function dialog({ title = '', message = '', callback = function() {} } = {}) {
  Dialog.alert({
    title: title,
    message: message
  }).then(() => {
    callback()
  })
}
