import {Page} from "@core/Page";
import {VievDashbord} from "./dahbords.func";

export class Dahbords extends Page{
  getRoot(){
    let div = document.createElement('div')
    div.classList.add('db')
    const ids = Date.now().toString()
    const $html = `
      <div class="db__header">
      <h1>Excel Dashboard</h1>
    </div>

    <div class="db__new">
      <div class="db__view">
        <a href="#exel/${ids}" class="db__create">
          Новая <br /> Таблица
        </a>
      </div>
    </div>

    <div class="db__table db__view">
       
       ${VievDashbord()}
     

    </div>
    `
    
    
    return div.innerHTML = $html
  }
}