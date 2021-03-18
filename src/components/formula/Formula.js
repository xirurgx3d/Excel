import {ExelComponent} from '@core/ExelComponent.js'

export class Formula extends ExelComponent{
  static className = 'excel__formula'
  constructor($root,componentOption){
    super($root,{
      name:'Formula',
      listner:['input','keydown'],
      subcrubers:['currentText'],
      ...componentOption
    })
  }
  toHtml(){
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  storeCancheg(chang){
    const $inp = this.$root.querySelector('.input')
    $inp.textContent = chang.currentText
  }
  
  
  init(){
    super.init()
    const $inp = this.$root.querySelector('.input')
    this.$on('table:select', cell => $inp.textContent = cell.value)
  }
  onInput(event){
    event.preventDefault()
    let text = event.target.textContent.trim()
    this.$emite('formula:input',text)
    //console.log(event.target)
    
  }
  onKeydown(event){
    if(event.key === 'Enter'){
      event.preventDefault()
      this.$emite('formula:enter',event)
    }
  }
  
}