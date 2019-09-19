import  HelloWorld  from './HelloWorld'
import Editor from './Editor'
import Gift from './gift'
import Animate from './Animate'
const components =[
    HelloWorld,
    Editor,
    Gift,
    Animate
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
export { HelloWorld,Editor,Gift,Animate}
