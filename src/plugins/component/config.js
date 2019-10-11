// 全局设置
const GLOBAL = {
};

export default {
  GLOBAL,
  // 每个路径单独设置组件
  '/index': {},
  '/login': {},
  '/transaction/order_detail': {
    commonTitle: () => import('../../components/commonTitle')
  },
  '/transaction/order_list': {
    commonTitle: () => import('../../components/commonTitle')
  },
  '/transaction/refund_detial': {
    commonTitle: () => import('../../components/commonTitle')
  },
  '/transaction/refund_list': {
    commonTitle: () => import('../../components/commonTitle')
  }
};
