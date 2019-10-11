import loadingLayout from './component.vue';
const load = {
  install: function(Vue){
    Vue.component(loadingLayout.name, loadingLayout)
  }
}
export default load;