import VueComponent from '../../libs/VueComponent';
import scrollBar from 'vue-pc-scroll';
import menuLayout from '../menuNode';
import {ADMIN_INFO, CURRENT_ACTIVE_MENU, FIRST_SEARCH, HISTORY_SEARCH} from '../../config/keySets';
import MenuData from '../../utils/MenuUtils';
import DefaultMenu from '../../config/defaultMenus';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('leftNav');
    // Vue.props
    this.setProps([]);
    // Vue.components
    this.setComponent({scrollBar, menuLayout});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions(['setIframeUrl']),
      loadMenu () {
        let self = this;
        let currentMenu = Component.$storage.get(CURRENT_ACTIVE_MENU) || {};
        let tempMenu = DefaultMenu;
        tempMenu.push({id: 0, name: '', parentId: '', url: ''});
        self.rootids = currentMenu.ids || [];
        self.treeData = (tempMenu.length > 1) ? new MenuData(tempMenu, self.rootids) : '';
        if (!currentMenu.curUrl) {
          self.setIframeUrl('../home.html');
        }
        if (self.rootids.length < 1) {
          const _traverseDown = (node) => {
            if (node.level > 0) { self.rootids.push(node.id); }
            if (node.children.length > 0) {
              _traverseDown(node.children[0]);
            }
          };
          _traverseDown(self.treeData.root);
        }
      },
      nodeClick (curItem) {
        let temp = null;
        let isChange = true;
        let len = this.rootids.length;
        if (this.rootids.indexOf(curItem.id) < 0) {
          if (curItem.level === 1 && len > 0) {
            this.rootids = [];
            this.rootids.push(curItem.id);
          } else if (curItem.level === 1 && len === 0) {
            this.rootids.push(curItem.id);
          } else {
            if (len === curItem.level - 1) {
              this.rootids.push(curItem.id);
            } else {
              let num = len - (curItem.level - 1);
              this.rootids.splice(curItem.level - 1, num, curItem.id);
            }
          }
        } else {
          isChange = false;
        }
        temp = this.treeData.clickActive(curItem, this.rootids, isChange);
        this.treeData.root = JSON.parse(JSON.stringify(temp));
        if (curItem.url) {
          let t = new Date();
          this.skipForIframe(curItem.url + '?time=' + t.getTime());
          Component.$storage.set(CURRENT_ACTIVE_MENU, {curUrl: curItem.url, ids: this.rootids});
          Component.$storage.remove(FIRST_SEARCH);
          Component.$storage.remove(HISTORY_SEARCH);
        }
      },
      skipForIframe (skipUrl) {
        this.setIframeUrl(skipUrl);
        let temp = skipUrl.match(/[\w\d]+.html/)[0];
        window.location.hash = temp.split('.')[0];
      },
      /**
       * onCreate中调用了super方法，则会默认调用该方法
       * */
      init () {
        this.loadMenu();
      }
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({})
    });
    // Vue.watch
    this.setWatch({});
  }

  getData () {
    return {
      menuLists: [],
      vm: null,
      treeData: '',
      rootids: []
    };
  }

  // Vue.created
  onCreate () {
    // 建议保留该方法，否则不会调用methods中的init方法
    super.onCreate();
  }
}

export default new Component();
