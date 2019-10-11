import VueComponent from '../../libs/VueComponent';

class Component extends VueComponent {
  constructor () {
    super();
    this.setModuleName('menuNode');
    // Vue.props
    this.setProps(['node', 'value', 'idx']);
    // Vue.components
    this.setComponent({});
    // Vue.methods
    this.setMethod({
      // Vuex.mapActions
      ...Component.mapActions([]),
      nodeClick (item) {
        this.$emit('nodeClick', item);
      }
    });
    // Vue.computed
    this.setCompute({
      // Vuex.mapGetters
      ...Component.mapGetters({}),
      valueModel: {
        get: function () {
          return this.value;
        },
        set: function (val) {
          this.$emit('input', val);
        }
      }
    });
    // Vue.watch
    this.setWatch({});
  }
  getData () {
    return {
      unwatchRootNode: () => {},
      tree: null
    };
  }
  onCreate () {
  }
  onbeforeDestroy() {
    if (typeof this.idx === 'undefined') {
      console.log(typeof this.unwatchRootNode)
      this.unwatchRootNode();
    }
  }
}

export default new Component();
