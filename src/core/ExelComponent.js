import {domLisner} from '@core/domLisner.js';
export class ExelComponent extends domLisner{
  constructor($root,option = {}){
    super($root,option.listner)
    this.name = option.name
    this.store = option.store
    this.emite = option.emiter
    this.subcrubers = option.subcrubers || []
    this.unsubers = []
    this.prepeding()
  }
  prepeding(){
    //return this.store.getState()
  }
  init(){
    //console.log(this.option)
    this.initDomLister();
  }
  $emite(event,...arg){
    this.emite.emit(event,...arg)
  }
  $on(event,fn){
    const unsub = this.emite.subcrube(event,fn)
    this.unsubers.push(unsub)
  }
  // подписываемся только тогда когда произошли измеения
  storeCancheg(){
  
  }
  
  inWatchers(keys){
    
    if(this.subcrubers){
      return this.subcrubers.includes(keys)
    }
  }
  
  $dispatch(action){
    this.store.dispatch(action)
  }
  $subscribe(fn){
    this.store.subscribe(fn)
  }
  
  dectroy(){
    this.removeDomLister()
    this.unsubers.forEach(ubsub => ubsub())
  }

}