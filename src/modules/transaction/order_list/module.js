import VueModule from '../../../libs/VueModule';
import {HISTORY_SEARCH} from '../../../config/keySets';
class Module extends VueModule {
  constructor () {
    super();
    this.setModuleName('module-transaction-order-list');
    this.setComponent({});
    this.setMethod({
      ...Module.mapActions(['toggleWarn']),
      init () {
        let temp = Module.$storage.get(HISTORY_SEARCH) || '';
        if (temp) {
          this.searchKeys = temp;
        }
        this.loadData();
      },
      setHistorySearch () {
        Module.$storage.set(HISTORY_SEARCH, this.searchKeys);
      },
      onSearch () {
        this.searchKeys.currentPage = 1;
        this.searchKeys.keyword = this.searchKeys.keyword.trim();
        this.loadData();
      },
      onReset () {
        this.searchKeys = {currentPage: 1, keyword: '', status: ''};
        this.loadData();
      },
      loadData () {
        let self = this;
        self.setHistorySearch();
        self.dataList = [];
        return false;
        /* let tmp = self.searchKeys;
        api.getCompanys(tmp.keyword, tmp.status, '', tmp.currentPage, 10).then(datas => {
          if (datas.code === '0') {
            let temp = datas.data || {};
            self.dataList = temp.result || [];
            self.loadTxt = '暂无数据';
            self.paginationOptions = {
              total: temp.totalRow,
              totalPage: temp.totalPage,
              current: tmp.currentPage,
              onPageChanged: (val) => {
                self.searchKeys.currentPage = val;
                self.loadData();
              }
            };
          } else {
            let temp = datas.msg.indexOf('error') > 0 ? '获取失败' : datas.msg;
            self.reviewData(temp);
          }
        }).catch(err => {
          console.error(err);
          self.reviewData('获取失败');
        }); */
      },
      reviewData (temp) {
        this.dataList = [];
        this.paginationOptions = {};
        this.loadTxt = '加载失败，请稍后重试';
        this.toggleWarn(temp);
      },
      scanItem (id) {
        Module.$browser.to('./order_detail.html?id=' + id);
      }
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
        titles: ['交易管理', '交易订单中心']
      },
      loadTxt: '加载中，请稍后',
      isLoad: false,
      tableTitles: ['订单编号', '订单名称', '交易订单号', '订单金额', '交易时间', '支付时间', '商户编号', '商户名称', '交易状态', '交易渠道', '操作'],
      paginationOptions: {},
      searchKeys: {currentPage: 1, keyword: '', status: ''},
      dataList: []
    };
  }
  onCreate () {
  }
}

export default new Module();
