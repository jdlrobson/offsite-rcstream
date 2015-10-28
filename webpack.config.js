var getConfig = require('hjs-webpack')

var isDev = process.env.NODE_ENV === 'development'

module.exports = getConfig({
  isDev: isDev,

  // entry point for the app
  in: 'src/index.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true,

  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        html: '<div id="app"></div>'
      })
    }
  }
})
