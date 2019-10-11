import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('Warn');
    this.setProps([]);
    this.setComponent({});
    this.setMethod({
      ...Component.mapActions([]),
      init () {}
    });
    this.setCompute({
      ...Component.mapGetters({warnInfo: 'warnInfo'})
    });
    this.setWatch({});
  }
  getData () {
    return {};
  }
  onCreate () {
    super.onCreate();
  }
}

export default new Component();
