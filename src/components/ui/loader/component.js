import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('Loader');
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({
        isShowLoad: 'isShowLoad'
      })
    });
  }
  getData () {
    return {};
  }

  // Vue.created
  onCreate () {
  }
}

export default new Component();
