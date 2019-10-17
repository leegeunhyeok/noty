const webpush = require('web-push')

const SUBJECT = 'mailto:dev.ghlee@gmail.com'

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
    webpush.setGCMAPIKey(this._serverKey)
    webpush.setVapidDetails(
      SUBJECT,
      vapidKeys.publicKey,
      vapidKeys.privateKey
    )

    this._vapidKeys = vapidKeys
  }

  /**
   * 공개키에 접근할 수 있는 서버 라우팅 경로 반환
   * @return {string} 라우팅 경로
   */
  getPublicKeyRoute () {
    return '/pushKey'
  }
  
  /**
   * 공개키 반환
   * @return {string} 공개키
   */
  getPublicKey () {
    return this._vapidKeys.publicKey
  }

  /**
   * 푸시 알림 전송
   * @param {string} subscription 구독 정보
   * @param {any} data 푸시 데이터
   * @return {Promise}
   */
  sendNotification (subscription, data) {
    webpush.getVapidHeaders()
    const option = {
      TTL: 24 * 60 * 60,
      vapidDetails: {
        subject: SUBJECT,
        publicKey: this._vapidKeys.publicKey,
        privateKey: this._vapidKeys.privateKey
      }
    }

    return webpush.sendNotification(subscription, data, option)
  }
}

exports.PushManager = PushManager
