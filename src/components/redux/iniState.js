import {utils} from '@core/utils.js';
let defState = {
  colsState:{},
  rowsState:{},
  dataState:{},
  dataTollbar:{},
  currentText:'',
  openedData: new Date().toJSON()
}
export const initonalSate = utils.storege('exel-state') ? utils.storege('exel-state') : defState
export const normalinitonalSate  = state => state ? state : JSON.parse(JSON.stringify(defState))