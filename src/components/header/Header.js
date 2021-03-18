import {ExelComponent} from '@core/ExelComponent.js'
import {ActiveRouter} from "../../core/routes/ActiveRouter";
import {Router} from "../../core/routes/Router";

export class Header extends ExelComponent{
  static className = 'excel__header'
  constructor($root,componentOption){
    super($root,{
      name:'Header',
      listner:['click'],
      subcrubers:[],
      ...componentOption
    })
    
  }
  onClick(event){
    const del  = event.target.dataset.delete
    const exit = event.target.dataset.exit
    if(del){
      localStorage.removeItem('exel:' + ActiveRouter.params)
      window.location.hash = ''
    }else if(exit){
      window.location.hash = ''
    }
  }
  toHtml(){
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons" data-delete="del">delete</i>
        </div>

        <div class="button">
          <i class="material-icons" data-exit="exit">exit_to_app</i>
        </div>

      </div>
    `
  }
}