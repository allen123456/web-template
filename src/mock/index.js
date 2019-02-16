import Mock from 'mockjs'
import testAPI from './test'

Mock.mock('/test', 'post', testAPI.test)
Mock.mock('/test/error', 'post', testAPI.error)

export default Mock
