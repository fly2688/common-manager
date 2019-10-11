import VueComponent from '../../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('component-ui-upload');
    // Vue.props
    this.setProps(['options']);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions([]),
      setOptions () {
        let temp = this.options || {};
        this.typeClass = temp.typeClass || '';
        this.type = temp.type || 'img';
        this.txt = temp.txt || '上传图片';
        this.isMultiple = temp.isMultiple || false;
        this.onSuccess = temp.onSuccess || null;
        this.onFail = temp.onFail || null;
        this.onUploadType = temp.onUploadType || null;
      },
      backFail (txt) {
        typeof this.onFail === 'function' && this.onFail(txt);
      },
      backType (flag) {
        typeof this.onUploadType === 'function' && this.onUploadType(flag);
      },
      onImgChange (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (files.length) {
          let tmp = files[0].type;
          if (tmp.indexOf('image/') < 0 && this.type === 'img') {
            this.backFail('请上传图片!');
          } else if (!/(jpg|jpeg|png|JPG|PNG)$/.test(tmp) && this.type === 'img') {
            this.backFail('请上传jpg或png格式的图片!');
          } else if ((files[0].size / 1024 / 1024) > 2 && this.type === 'img') {
            this.backFail('请上传小于2M的图片!');
          } else {
            this.createImage(files);
          }
          e.target.value = '';
        }
      },
      createImage (files) {
        if (typeof FileReader === 'undefined') {
          this.backFail('您的浏览器不支持图片上传，请升级您的浏览器');
          return false;
        } else {
          let self = this;
          let img = window.URL.createObjectURL(files[0]);
          typeof self.onSuccess === 'function' && self.onSuccess(img);
        }
      },
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          this.backType(false);
          return false;
        }
        let tmp = files[0].name || '';
        let tmpType = tmp.substring(tmp.lastIndexOf('.'));
        let defualtType = files[0].type || '';
        let isExcel = ((tmpType === '.xls' || tmpType === '.xlsx') && defualtType === '');
        if (defualtType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || defualtType === 'application/vnd.ms-excel' || isExcel) {
          this.backType(true);
          typeof this.onSuccess === 'function' && this.onSuccess(files);
          e.target.value = '';
        } else {
          this.backFail('请上传Excel表格!');
          this.backType(false);
        }
      },
      onAllFileChange (e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          this.backType(false);
          return false;
        } else {
          typeof this.onSuccess === 'function' && this.onSuccess(files);
          e.target.value = '';
        }
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
        this.setOptions();
      }
    });
  }

  /**
  * Vue.data = {
  *   return {};
  * }
  */
  getData () {
    return {
      typeClass: '',
      isMultiple: false,
      txt: '上传图片',
      type: 'img'
    };
  }

  // Vue.created
  onCreate () {
    // 建议保留该方法，否则不会调用methods中的init方法
    super.onCreate();
  }
}

export default new Component();
