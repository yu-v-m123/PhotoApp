import { getCookieValue } from './util'

window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.interceptors.request.use(config => {
  console.log(getCookieValue('XSRF-TOKEN'));
  config.header['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN');
  return config
})
