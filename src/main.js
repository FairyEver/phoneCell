// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'weui/dist/style/weui.css'

import fastclick from 'fastclick'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
    modelMaker (model) {
      let _model = model
      // iphone
      if (_model === 'se') {
        _model = 'SE'
      }
      if (_model === '-x') {
        _model = 'X'
      }
      if (_model.split('-').length === 2) {
        _model = _model.split('-').join(' ')
      }
      // ipad
      if (_model === 'ipad') {
        _model = ''
      }
      if (_model.indexOf('in') > 0) {
        _model = _model.substring(0, _model.length - 2) + '寸'
      }
      return _model
    }
  }
})

fastclick.attach(document.body)
