let util = require('./md5.js')  

const BASE_URL = "" //1.todo 这是在果创云后台域名

function enryptData (params) {
  const app = getApp()
  
  const OKAYAPI_APP_KEY = "" //2.todo 这是在果创云后台APP_KEY

  const OKAYAPI_APP_SECRECT = "" // 3 这是在果创云后台APP_KEY

  params['app_key'] = OKAYAPI_APP_KEY
  params['sign'] = '' // 屏蔽sign参数

  var sdic = Object.keys(params).sort();
  var paramsStrExceptSign = "";
  for (let ki in sdic) {
    paramsStrExceptSign += params[sdic[ki]];
  }

  var sign = util.hexMD5(paramsStrExceptSign + OKAYAPI_APP_SECRECT).toUpperCase();
  params['sign'] = sign;

  return params;
}

module.exports = {
  enryptData: enryptData,
  baseUrl : BASE_URL
  
}  