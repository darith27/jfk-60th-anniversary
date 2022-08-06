module.exports = {
  pwa:{
    name: 'JFK 60th Anniversary',
    themeColor: '#0D47A1',
    manifestOptions: {
      start_url: 'https://external.jsc.nasa.gov/jfk-60th-anniversary/',
      scope: 'https://external.jsc.nasa.gov/jfk-60th-anniversary/'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/registerServiceWorker.js',
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'PRODUCTION'
  ? '/jfk-60th-anniversary'
  : '/'
}
