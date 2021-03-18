import {$} from '@core/dom.js'
import {Emitter} from "@core/Emitter";
import {storeSubcribe} from "@core/storeSubcribe";
import {changeData} from "../redux/action";


export class Excel{
  constructor(options){
    //this.$el = document.querySelector(selector)
    this.components = options.components || []
    this.store = options.store
    this.emiter = new Emitter()
    this.subcruber = new storeSubcribe(this.store)
  }
  getRoot(){
    const $root = $.create('div','excel')
    this.components = this.components.map(Component =>{
      const $elem = document.createElement('div')
      $elem.classList.add(Component.className)
      
      const componentOption = {
        emiter:this.emiter,
        store:this.store
      }
      
      const component = new Component($elem,componentOption);
      
      //debug
      //window['c' + component.name] = component
      
      const intertRoot = $root.appendChild($elem)
      intertRoot.insertAdjacentHTML('beforeend', component.toHtml())
      return component
    });
    return $root;
  }
  getFpRoot(){
    // попробывать сделать в ФП стиле
    const $root = document.createElement('div')
    const clases = elem => cls =  elem.classList.add(cls)
    const component = fn => className => new fn(className)
    
    const comp = compose(component(className),)
    
    this.components.forEach();
  }
  
  init(){
    //this.$el.append(this.getRoot() );
    this.store.dispatch(changeData())
    this.subcruber.subscribeComponents(this.components)
    this.components.forEach(Component => Component.init())
    //this.components.forEach(Component => Component.dectroy())
  }
  destroyse(){
    this.components.forEach(compont => compont.dectroy())
    this.subcruber.unsubsrubeComponents()
  }
}