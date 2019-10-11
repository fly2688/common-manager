import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-transaction-set-scan');
    this.setProps(['options']);
    this.setComponent({});
    this.setMethod({
      ...Component.mapActions([]),
      init () {
        this.setOptions();
      },
      setOptions () {
        let tmp = this.options || {};
        this.isShowSet = tmp.isShow || false;
        // 初始化数据
        this.detail = tmp.data || {};
      }
    });
    this.setCompute({
      ...Component.mapGetters({
        windowHeight: 'windowHeight'
      }),
      minHeight () {
        return (this.windowHeight / 2 + 50) + 'px';
      }
    });
    this.setWatch({
      options () {
        this.setOptions();
      }
    });
  }
  getData () {
    return {};
  }
  onCreate () {
    super.onCreate();
  }
}

export default new Component();
