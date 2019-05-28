import  HelloWorld  from './HelloWorld';
import Editor from './Editor.vue';
const components =[
    HelloWorld,
    Editor
]

const install = function(Vue) {

    components.forEach(component => {
      Vue.component(component);
    });
  };
  
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
export { HelloWorld,Editor }
