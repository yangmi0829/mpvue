//   第一个是默认的首页
module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '1',
    enablePullDownRefresh: false,
    usingComponents: {
      'i-button': '../../iView/button/index'
    }
  }
},{
  path: 'pages/index/index2',
  name: 'index2',
  config: {
    navigationBarTitleText: '2',
    enablePullDownRefresh: false,
    usingComponents: {
      'i-button': '../../iView/button/index'
    }
  }
}];
