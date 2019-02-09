import request from '@/utils/request'

// 测试
export function test() {
  return request({
    url: '/auth/accountLogin/w/v1',
    method: 'post'
  })
}
