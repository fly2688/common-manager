import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-transaction-pay-set');
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
        this.payway = 'ali';
        this.oldWay = '';
        this.proIndex = '';
        this.wayModel = 'zft';
        this.transway = 'a-mobile';
        this.clearTool(this.ali, 'pid', true);
        this.clearTool(this.wx, 'shh', true);
      },
      preCheck () {
        console.log('click');
      },
      save () {
      },
      clearTool (obj, type, unSame) {
        for (let i in obj) {
          if ((!unSame && i !== type) || unSame) {
            obj[i] = '';
          }
        }
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
      },
      payway (val) {
        this.transway = this.payWays[val][0].type;
        if (val === 'wx') {
          this.wayModel = 'mytg';
        } else {
          this.wayModel = 'zft';
        }
      },
      wayModel () {
        let unSame = (this.oldWay !== this.payway);
        if (unSame) this.oldWay = this.payway;
        this.clearTool(this.ali, 'pid', unSame);
        this.clearTool(this.wx, 'shh', unSame);
      },
      proIndex (i) {
        this.ali.pid = this.proDatas[i].pid;
      }
    });
  }
  getData () {
    return {
      isShowSet: false,
      wayModel: '',
      payway: '',
      proIndex: '',
      transway: '',
      payWays: {
        ali: [
          {name: '支付宝移动支付', type: 'a-mobile'},
          {name: '支付宝手机网页支付', type: 'a-phone'},
          {name: '支付宝PC网页支付', type: 'a-pc'},
          {name: '支付宝扫码支付', type: 'a-saoma'},
          {name: '支付宝二维码支付', type: 'a-erwima'}],
        wx: [
          {name: '微信移动支付', type: 'w-mobile'},
          {name: '微信H5支付', type: 'w-phone'},
          {name: '微信公众号支付', type: 'w-pc'},
          {name: '微信小程序支付', type: 'w-saoma'},
          {name: '微信二维码支付', type: 'w-erwima'}]
      },
      ali: {pid: '', siyao: '', gongyao: ''},
      wx: {appId: '', shh: '', siyao: '', api: ''},
      oldWay: '',
      proDatas: []
    };
  }
  onCreate () {
    super.onCreate();
  }
}

export default new Component();
