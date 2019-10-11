import VueModule from '../../libs/VueModule';

class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-login');
    
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Module.mapActions([]),
      /**
       * onCreate中调用了super方法，则会默认调用该方法
       * */
      init () {}
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Module.mapGetters({})
    });
    // Vue.watch
    this.setWatch({});
  }

  /**
  * Vue.data = {
  *   return {};
  * }
  */
  getData () {
    return {};
  }

  // Vue.created
  onCreate () {
    // 建议保留该方法，否则不会调用methods中的init方法
    super.onCreate();
  }
}

export default new Module();
