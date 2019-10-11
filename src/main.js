import Vue from 'vue';
import axios from 'axios';
import store from './plugins/vuex';
import router from './plugins/router';
// 异常处理器插件
import './plugins/handler/error';
import component from './plugins/component';
// Vue实例初始化工具
import Initiator from './utils/Initiator';
import './assets/css/reset.css';
import Pagination from 'vue-pc-pagination';
import vTable from 'vue-pc-table';
import commonUI from 'vue-common-web-ui';
import Loader from './components/ui/loader';
import Warn from './components/ui/warn';
Vue.use(Pagination);
Vue.use(vTable);
Vue.use(commonUI);
Vue.use(Loader);
Vue.use(Warn);
Vue.config.productionTip = false;

export default module => {
  component.init(router);
  const app = new Vue({
    router,
    store,
    render: h => h(module),
    beforeCreate () {
      Initiator.registerApp(this);
      axios.get('/json/baseConfig.json').then(response => {
        Initiator.registerBaseConfig(response.data);
        // store.dispatch('judgeIsOutSign');
      });
    }
  });
  app.$mount('#app');
  return app;
};
