var gulp = require('gulp');

require('gulp-web-modules')({
  css: {
    priority: ['bootstrap.css']
  },
  devServer: {
    mocks: {
      prefix: '/services/'
    }
  },
  plugins: [
    require('gwm-handlebars')(),
    require('gwm-react')(),
    require('gwm-lib')(),
    require('gwm-config')(),
    require('gwm-sass')()
  ]
}).injectTasks(gulp);
