import warnLayout from './component.vue';
const warn = {
  install: function(Vue){
    Vue.component(warnLayout.name, warnLayout)
  }
}
export default warn;