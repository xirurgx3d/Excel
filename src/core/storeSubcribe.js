import {utils} from "@core/utils";

export class storeSubcribe{
  constructor(store){
    this.store = store
    this.sub = null
    this.prevState = {}
  }
  
  subscribeComponents(components){
    this.prevState = this.store.getState()
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(key =>{
        if(!utils.isEcval(this.prevState[key],state[key])){
          components.forEach(comp =>{
            if(comp.inWatchers(key)){
              const chang = {[key]:state[key]}
              comp.storeCancheg(chang)
            }
            
          })
        }
        
      })
      this.prevState = this.store.getState()
    })
    
  }
  unsubsrubeComponents(){
    this.sub.unsub()
  }
}