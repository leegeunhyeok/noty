const path = require('path')

// Webpack 서버 포트
const DEV_PORT = 8081

// 프록시 서버 정보
const PROXY = {
  HOST: 'localhost',
  PORT: 8080
}

module.exports = {
  // 빌드시 소스맵 파일 생성 안함
  productionSourceMap: false,
  // 빌드 결과 저장 폴더
  outputDir: path.join(__dirname, 'src', 'client', 'dist'),
  configureWebpack: {
    devServer: {
      // 개발 중 서버로 요청할 경우(API 등) 웹팩 서버가 아닌 지정된 프록시 서버로 요청함
      proxy: `http://${PROXY.HOST}:${PROXY.PORT}`,
      port: DEV_PORT,
      host: '0.0.0.0',
      public: `0.0.0.0:${DEV_PORT}/app`,
      // CORS 관련 설정
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    },
    resolve: {
      // @를 통해 static/src 폴더 접근 가능
      alias: {
        '@': path.join(__dirname, 'src', 'client', 'src')
      }
    },
    entry: {
      app: path.join(__dirname, 'src', 'client', 'src', 'main.js')
    }
  },
  // https://cli.vuejs.org/ru/config/#chainwebpack
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Noty'
        args[0].template = path.join(
          __dirname, 'src', 'client', 'public', 'index.html')
        return args
      })
  }
}
