import keys from './keys';

// 状态管理中的方法集
export default {
  setWindowSize({commit}, windowSize) {
    commit(keys.SET_WINDOW_SIZE, windowSize);
  },
  setIframeUrl({ commit }, info) {
    commit(keys.SET_IFRAMEURL, info);
  },
  setBaseConfig({ commit }, info) {
    commit(keys.SET_BASE_CONFIG, info);
  },
  setCopyRight({ commit }, info) {
    commit(keys.SET_COPYRIGHT, info);
  },
  setLoading({ commit }, info) {
    commit(keys.SET_LOADING, info);
  },
  setEnLargeImg({ commit }, info) {
    commit(keys.SET_ENLARGEIMG, info);
  },
  toggleWarn({ commit }, info) {
    commit(keys.TOGGLE_WARN, info);
  },
  judgeIsOutSign({ commit }) {
    commit(keys.JUDGE_IS_OUT_SIGN);
  }
};