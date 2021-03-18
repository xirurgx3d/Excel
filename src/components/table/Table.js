import {ExelComponent} from '@core/ExelComponent.js'
import {$} from '@core/dom.js'
import {createTable} from './_table.tamplate.js'
import {resizeHandler,shoulResize} from './_table.resize.js'
import {dragdrope,shoulDragdrope} from './_table.dragdrop.js'
import {TableSelect,shoulSelect} from './TableSelect.js'
import * as action from '../redux/action.js'
import * as conf from "../../config";

export class Table extends ExelComponent{
  static className = 'excel__table'
  constructor($root,componentOption){
    super($root,{
      name:'Table',
      listner:['mousedown','click','input'],
      subcrubers:['colsState','rowsState','dataTollbar'],
      ...componentOption
    })
  }
  toHtml(){
    return createTable(15,this.store.getState())
  }
  prepeding(){
    this.selected = new TableSelect()
  }
  
  storeCancheg(ch){
    this.selected.addStyle(ch)
  }
  
  init(){
    super.init()
    const $cells = this.$root.querySelector('[data-id="1:0"]')
    const $select = this.$root.querySelector('.selected')
    
    this.selected.sected($cells)
    this.check = this.selected.checselect()
    
    //this.$subscribe(fn => console.log(fn))
    
    //emit
    this.$on('formula:input', text =>{
      if(this.selected.current.length !== 0){
        
        this.selected.current.forEach($cels => {
          this.undateTEXT($cels,text)
          $cels.value = text
        })
      }
    })
    this.$on('formula:enter', () =>{
      this.selected.current.forEach(sel => {
        sel.focus()
      })
    })
    /*
    this.$on('tolbar:aplyStyle',styles => {
      this.selected.addStyle(styles)
    })
    */
    
  }
  async tableResize(event){
    const data = await resizeHandler.call(this,event)
    this.$dispatch(action.tableResize(data))
    //this.$dispatch({type:'TAB_RESIZE',data})
  }
  
  
  onMousedown(event){
    if(shoulResize(event)){
      this.tableResize(event)
      //resizeHandler.call(this,event)
    } else if(shoulSelect(event)){
      this.selected.gripSelect(event,this.$root)
    } else if(shoulDragdrope(event)){
      dragdrope(event)
    }
  }
  onClick(event){
    if(shoulSelect(event)){
      this.check(event.target)
      this.$emite('table:select', event.target,$.getStyle(event.target,Object.keys(conf.defaultStyle)))
      
      
    }
  }
  onInput(event){
    if(event.target.parentNode.dataset.colselect){
      this.selected.inpute(this.check,event.target)
      //this.$emite('table:input', event.target)
      this.undateTEXT(event.target,event.target.value)
      this.$emite('table:select', event.target)
      //$.getStyle(event.target,Object.keys(conf.defaultStyle))
      this.$emite('table:select', event.target,$.getStyle(event.target,Object.keys(conf.defaultStyle)))
    }
  }
  
  undateTEXT(id,text){
    const idinpt = id.parentNode.dataset.id
    this.$dispatch(action.changeText({
      id:idinpt,
      value:text
    }))
  }
  
  
}