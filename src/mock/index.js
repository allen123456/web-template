import Mock from 'mockjs'
import testAPI from './test'

Mock.mock('/auth/accountLogin/w/v1', 'post', testAPI.test)

export default Mock
