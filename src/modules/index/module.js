import VueModule from '../../libs/VueModule';
import {CURRENT_ACTIVE_MENU} from '../../config/keySets';
import leftNav from '../../components/leftNav';
import topNav from '../../components/topNav';
import co from 'co';

class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-index');
    this.setComponent({leftNav, topNav});
    this.setMethod({
      ...Module.mapActions(['setIframeUrl']),
      init () {
        this.request();
        let currentMenu = Module.$storage.get(CURRENT_ACTIVE_MENU) || {};
        if (currentMenu.curUrl) {
          this.setIframeUrl(currentMenu.curUrl);
        }
        let self = this;
        self.topOptions = {
          success: () => {
            self.dialogOptions = {
              title: '确定退出翼起o2o后台管理系统吗？',
              isShow: true,
              success: () => {
                Module.$browser.backLogin();
              }
            };
          },
          resetPsw: () => {
            self.cancel();
          }
        }
      },
      request () {
        co(function* () {
          const res = yield Module.$api.test();
          console.log(res);
        });
      },
      goto () {
        Module.$browser.to('../login.html');
      },
      cancel () {
        this.isShowLayer = !this.isShowLayer;
        this.newPsw = '';
        this.newSecPsw = '';
      },
      modifyPsw () {
        // let datas = Module.$storage.get(ADMIN_INFO) || {};
        let self = this;
        self.isShowLayer = !self.isShowLayer;
        self.dialogOptions = {
          title: '修改之后需退出重新登录，确定修改密码吗？',
          isShow: true,
          success: () => {
          }
        };
      }
    });
    // Vue.computed
    this.setCompute({
      ...Module.mapGetters({
        iframeUrl: 'iframeUrl',
        windowWidth: 'windowWidth',
        windowHeight: 'windowHeight',
        baseConfig: 'baseConfig'
      }),
      minHeight () {
        return (this.windowHeight - 62) + 'px';
      }
    });
    // Vue.watch
    this.setWatch({
      baseConfig (val) {
        document.title = val.TITLE || '';
      }
    });
  }

  getData () {
    return {
      dialogOptions: {},
      topOptions: {}
    };
  }

  // Vue.created
  onCreate () {
    super.onCreate();
  }
}

export default new Module();
