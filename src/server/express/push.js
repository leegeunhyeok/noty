const webpush = require('web-push')

class PushManager {
  /**
   * 생성자
   * @param {*} serverKey Firebase 서버 키
   */
  constructor (serverKey) {
    this._serverKey = serverKey
    this._vapidKeys = null
  }

  /**
   * 푸시 알림 관리 객체 초기화
   */
  init () {
    // 암호키 생성
    const vapidKeys = webpush.generateVAPIDKeys()
    webpush.setGCMAPIKey(this.serverKey)
    webpush.setVapidDetails(
      'mailto:dev.ghlee@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    )

    this._vapidKeys = vapidKeys
  }
}

exports.PushManager = PushManager
