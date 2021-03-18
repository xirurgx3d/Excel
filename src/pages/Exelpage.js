import {Page} from "@core/Page";
import {Excel} from '../components/excel/Excel.js';
import {Header} from '../components/header/Header.js';
import {Formula} from '../components/formula/Formula.js';
import {Table} from '../components/table/Table.js';
import {Toolbar} from '../components/toolbar/Toolbar.js';
import {utils} from '@core/utils.js';
import {rootReducer} from '../components/redux/rootReducer.js';
import {initonalState} from '../components/redux/iniState.js';
import {normalinitonalSate} from "../components/redux/iniState";
import {createStrore} from "@core/store/createStore";

function StateName(param) {
  return 'exel:' + param
}
export class Exelpage extends Page{
  getRoot(){
    const param = this.params ? this.params : Data.now().toString()
    const state = utils.storege(StateName(param))
    const store = createStrore(rootReducer,normalinitonalSate(state))
    
    
    store.subscribe(state =>{
      utils.storege(StateName(param),state)
    })
  
    this.excel = new Excel({
      components:[Header,Formula,Table,Toolbar],
      store
    });
    return this.excel.getRoot()
  }
  afterRender(){
    this.excel.init()
  }
  destroy(){
    this.excel.destroyse()
  }
}