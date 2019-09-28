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
