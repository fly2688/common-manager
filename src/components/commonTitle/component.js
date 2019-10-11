import VueComponent from '../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-common-title');
    // Vue.props
    this.setProps(['options']);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions([]),
      back () {
        history.back();
      },
      setOptions () {
        let temp = this.options || {};
        this.titles = temp.titles || [];
        this.isShow = temp.isShow || false;
      },
      init () {
        this.setOptions();
      }
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({})
    });
    // Vue.watch
    this.setWatch({
      options () {
        this.init();
      }
    });
  }
  getData () {
    return {
      titles: [],
      isShow: true
    };
  }

  // Vue.created
  onCreate () {
    // 建议保留该方法，否则不会调用methods中的init方法
    super.onCreate();
  }
}

export default new Component();
