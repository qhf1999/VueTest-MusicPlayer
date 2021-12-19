// 判断 string 类型
export function isString(v) {
  return typeof v === 'string'
}

// http 链接转化成 https
// http 链接转化成 https
export function toHttps(url) {
  if (!isString(url)) {
    return url
  }
  return url.replace('http://', 'https://')
}

export function isPromise(v) {
  return v !== undefined && v !== null && typeof v.then === 'function'
}

export function silencePromise(value) {
  if (isPromise(value)) {
    value.then(null, () => { })
  }
}
