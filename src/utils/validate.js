/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

// 校验手机号格式
export function validatePhone(rule, value, callback) {
  if (!value) {
    return callback(new Error('请输入手机号'))
  } else {
    const tel = /^((0\d{2,3}-\d{7,8})|(1[123456789]\d{9}))$/
    if (tel.test(value)) {
      callback()
    } else {
      return callback(new Error('手机号格式不正确'))
    }
  }
}

// 校验密码强度
export function validatePasswordStrength(rule, value, callback) {
  if (!value) {
    return callback(new Error('请输入密码'))
  } else {
    const tel = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
    if (tel.test(value)) {
      callback()
    } else {
      return callback(new Error('密码格式不正确，请重新检查'))
    }
  }
}
/* eslint-disable */
// 密码包含大写字母、小写字母、数字、符号任意两种
export const regPasswordStrength = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){8,}$/
// ，长度8-20
// export const regPasswordStrength = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){8,20}$/

