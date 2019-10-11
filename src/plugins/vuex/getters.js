// 状态管理中的属性集
export default {
  windowWidth: state => state.windowSize.width,
  windowHeight: state => state.windowSize.height,
  iframeUrl: state => state.iframeUrl,
  baseConfig: state => state.baseConfig,
  isShowLoad: state => state.isShowLoad,
  isEnlarge: state => state.enlargeImg.flag,
  enlargeUrl: state => state.enlargeImg.urls,
  warnInfo: state => state.warnInfo,
  isSignOut: state => state.isOutLogin
};
