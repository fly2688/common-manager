import VueModule from '../../../libs/VueModule';

class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-transaction-order-detail');
    this.setComponent({});
    this.setMethod({
      ...Module.mapActions([]),
      init () {}
    });
    this.setCompute({
      ...Module.mapGetters({
        isSignOut: 'isSignOut'
      })
    });
    this.setWatch({
      isSignOut (val) {
        if (val) {
         Module.$browser.backLogin();
        } else {
          this.init();
        }
      }
    });
  }
  getData () {
    return {
      titleOptions: {
        titles: ['交易管理', '订单详情'],
        isShow: true
      },
      detail: {}
    };
  }
  onCreate () {
  }
}

export default new Module();
