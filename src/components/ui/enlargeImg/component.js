import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-ui-enlarge-img');
    // Vue.props
    this.setProps(['options']);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      ...Component.mapActions(['setEnLargeImg']),
      enLargeImg (val) {
        this.setEnLargeImg(val);
      },
      delImage (index) {
        this.imgList.splice(index, 1);
        typeof this.delImg === 'function' && this.delImg(index);
      },
      setOptions () {
        let tempOptions = this.options || {};
        this.imgList = tempOptions.imgList || [];
        this.isShow = tempOptions.isShow || false;
        this.delImg = tempOptions.delImg || null;
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
      imgList: [],
      delImg: null,
      isShow: false
    };
  }

  // Vue.created
  onCreate () {
    // 建议保留该方法，否则不会调用methods中的init方法
    super.onCreate();
  }
}

export default new Component();
