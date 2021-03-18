import {utils} from '@core/utils.js'

export class domLisner{
  constructor($root,lisnters = []){
    if(!$root){
      throw new Error('no $root')
    }
    this.$root = $root;
    this.lisnters = lisnters;
  }
  initDomLister(){
    this.lisnters.forEach(lisner =>{
      
      const metod = this.getMetodName(lisner)
      if(this[metod]){
        this[metod] = this[metod].bind(this)
        this.$root.addEventListener(lisner,this[metod])
      }
    })
    
  }
  removeDomLister(){
    this.lisnters.forEach(lisner =>{
      const metod = this.getMetodName(lisner)
      if(this[metod]){
        this.$root.removeEventListener(this.lisnters,this[metod])
      }
    })
  }
  getMetodName(name){
    return 'on' + utils.capitalaze(name)
  }
  
}