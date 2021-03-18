import {ExelComponent} from "@core/ExelComponent";

export class ExelStateComponent extends ExelComponent{
  constructor(...args){
    super(...args)
  }
  get tamplate (){
    return JSON.stringify(this.state)
  }
  
  initState(intitState = {}){
    this.state = {...intitState}
  }
  setState(newState){
    this.state = {...this.state,...newState}
    this.$root.innerHTML = this.tamplate
  }
}