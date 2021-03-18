//import {ExelComponent} from '@core/ExelComponent.js'
import {ExelStateComponent} from "@core/ExelStateComponent";
import {createTolbar,buttons} from "./toolbar.template";
import * as action from '../redux/action.js'
import {defaultStyle} from "../../config";


export class Toolbar extends ExelStateComponent{
  static className = 'excel__toolbar'
  constructor($root,componentOption){
    super($root,{
      name:'Toolbar',
      listner:['click'],
      subcrubers:[],
      ...componentOption
    })
  }
  
  prepeding(){
    
    const initinalState = {...defaultStyle}
    this.initState(initinalState)
  }
  get tamplate(){
    return createTolbar(this.state)
  }
  init(){
    super.init()
    this.$on('table:select', (cell,obj) => {
      //console.log(obj)
      this.setState(obj)
      this.$currCell =
        cell.dataset.id ? cell.dataset.id : cell.parentNode.dataset.id
    })
  }
  
  toHtml(){
    //this.setState()
    return this.tamplate
  }
  onClick(event){
    const butts = event.target
    if(butts.dataset.type === 'button'){
      const val = JSON.parse(butts.dataset.value)
      const key = Object.keys(val)[0]
      //this.$emite('tolbar:aplyStyle',val)
      
      this.setState({[key]:val[key]})
      this.$dispatch(action.changeTollBar({
        id:this.$currCell,
        value:this.state
      }))
    }
    
  }
}