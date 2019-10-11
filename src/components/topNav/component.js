import VueComponent from '../../libs/VueComponent';
import {ADMIN_INFO} from '../../config/keySets';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-top-nav');
    // Vue.props
    this.setProps(['options']);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions([]),
      init () {
        let datas = Component.$storage.get(ADMIN_INFO) || {};
        this.username = datas.name || '';
        this.setOptions();
      },
      setOptions () {
        let temp = this.options || {};
        this.success = temp.success || null;
        this.resetPsw = temp.resetPsw || null;
      },
      tuiChu () {
        typeof this.success === 'function' && this.success();
      },
      onSet () {
        typeof this.resetPsw === 'function' && this.resetPsw();
      }
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({
        baseConfig: 'baseConfig'
      })
    });
    // Vue.watch
    this.setWatch({
      options () {
        this.setOptions();
      }
    });
  }

  getData () {
    return {
      username: '',
      account: '',
      resetPsw: null
    };
  }

  // Vue.created
  onCreate () {
    super.onCreate();
  }
}

export default new Component();
