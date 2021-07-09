export const isObject = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return false
  }

  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isEnvProduction = () => {
  return process.env.NODE_ENV === 'production'
}

export const formatComponentName = (component) => {
  return component.split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}
