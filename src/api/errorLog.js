import request from '@/utils/request'

export function updateLog(data) {
  return request({
    url: '/test/error',
    method: 'post',
    data
  })
}
