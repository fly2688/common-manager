import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-ui-huge-img-layer');
    // Vue.props
    this.setProps([]);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions(['setEnLargeImg']),
      hide () {
        this.enLargeImage('');
      },
      init () {
        this.imgUrl = this.enlargeUrl;
        this.isShow = (this.imgUrl !== '' && this.isEnlarge);
      }
    });
    // Vue.computed
    this.setCompute({
      ...Component.mapGetters({
        windowHeight: 'windowHeight',
        enlargeUrl: 'enlargeUrl',
        isEnlarge: 'isEnlarge'
      }),
      imgHeght () {
        return (this.windowHeight / 1.5) + 'px';
      }
    });
    // Vue.watch
    this.setWatch({
      enlargeUrl () {
        this.init();
      }
    });
  }

  getData () {
    return {
      isShow: false,
      imgUrl: ''
    };
  }

  // Vue.created
  onCreate () {
    super.onCreate();
  }
}

export default new Component();
