const jwt = require('jsonwebtoken')

exports.getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, 'secret')
    }
    return null
  } catch (err) {
    return null
  }
}

exports.paddingNumber = (target, length) => {
  const targetLength = target.toString().length
  let padding = ''
  for (let i = 0; i < length - targetLength; i++) {
    padding += '0'
  }

  return padding + target
}
