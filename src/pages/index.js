import  HelloWorld  from './HelloWorld';
import Editor from './Editor.vue';
import Gift from './gift'
const components =[
    HelloWorld,
    Editor,
    Gift
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
export { HelloWorld,Editor,Gift}
