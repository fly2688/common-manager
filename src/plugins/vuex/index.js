import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import keys from './keys';
import {JX_TOKENINFO} from '../../config/keySets';
import Storage from 'compatible-storage';

Vue.use(Vuex);

// 状态管理
const state = {
  windowSize: {},
  iframeUrl: '../home.html',
  baseConfig: {},
  copyRight: '',
  isShowLoad: false,
  warnInfo: {
    flag: false, content: ''
  },
  enlargeImg: {
    flag: false, urls: ''
  },
  isOutLogin: null
};

const mutations = {
  [keys.SET_WINDOW_SIZE] (state, windowSize) {
    state.windowSize = windowSize;
  },
  [keys.SET_IFRAMEURL] (state, info) {
    state.iframeUrl = info || 'error';
  },
  [keys.SET_BASE_CONFIG] (state, info) {
    state.baseConfig = info || {};
  },
  [keys.SET_COPYRIGHT] (state, info) {
    state.copyRight = info || '';
  },
  [keys.SET_LOADING] (state, info) {
    state.isShowLoad = info;
  },
  [keys.SET_ENLARGEIMG](state, info) {
    state.enlargeImg.flag = !state.enlargeImg.flag;
    state.enlargeImg.urls = info || '';
  },
  [keys.TOGGLE_WARN] (state, info) {
    state.warnInfo.flag = true;
    state.warnInfo.content = info;
    setTimeout(function () {
      state.warnInfo.flag = false;
    }, 1300);
  },
  [keys.JUDGE_IS_OUT_SIGN](state) {
    let temp = Storage.get(JX_TOKENINFO) || '';
    console.log(temp);
    // state.isOutLogin = (temp === '');
    state.isOutLogin = false;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
