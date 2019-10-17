/*

MIT License

Copyright (c) 2019 GeunHyeok LEE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const { log } = require('../logger')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

exports.init = (app, pushManager) => {
  log.info('Express Server Initializing..')
  // Middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(cors())
    log.warning('[DEV] CORS Option activated')
  }
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Route
  app.get('/', (_req, res) => {
    res.send('<h1>Hello!</h1>')
  })

  app.get(pushManager.getPublicKeyRoute(), (_req, res) => {
    res.json({ publicKey: pushManager.getPublicKey() })
  })
}