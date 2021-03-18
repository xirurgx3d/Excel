import {utils} from "../../core/utils";

const CODE = {
  A:65,
  Z:90
}
const WITCHCELL = '120px'
const HeadHCELL = '24px'
function toCell(col,index,w,d,t = {}) {
  const idcell = `${col+1}:${index}`
  const data = d[idcell]
  const tools = t[idcell]
  /* */
  let styles = Object.keys({...tools})
    .map(key => `${utils.camelCase(key)}:${utils.camelCase(tools[key])}`)
    .join(';')
  
  return `<div class="cell"
    style="width: ${w || WITCHCELL};"
    data-colselect="cell"
    data-id="${col+1}:${index}"
    contenteditable="${index}"
    data-col="${col+1}"
    data-row="${index}">
    <input type="text" style="${styles}" class="cellimpt" value="${data || ''}" name="cell" placeholder="${col+1}">
</div>`
  
}
function createCol(el,index,w) {
  return `
  <div class="column" style="width: ${w || WITCHCELL}" data-rows="dpag" data-clumn="resiz" data-colsname="${index}">
    ${el}
    <div class="column-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index,content,h) {
  return `
    <div class="row" style="height: ${h || HeadHCELL}" data-rows="dpag" data-clumn="resiz" data-colsname="${index}">
        <div class="row-info">
        <span>${index || ''}</span>
        <div class="row-resize" data-resize="row"></div>
        </div>

        <div class="row-data">${content}</div>
      </div>
  `
}
const getwitch = state => index => state[index]
const watstore = fn => wtch => (val,index) => fn(String.fromCharCode(CODE.A + index),index,wtch(index))
const mapes = fn => (val,index) =>  fn(String.fromCharCode(CODE.A + index),index)

const rowes = row => fn => row.push(fn)

export function createTable(rowCount = 15,store) {
  const coulCount = CODE.Z -  CODE.A + 1
  const row = [];
  /*
  const cols = new Array(coulCount)
    .fill('')
    .map((val,index) =>{
      return createCol(String.fromCharCode(CODE.A + index))
    })
    .join('')
   */
  //getwitch(store.colsState)
  
  const cols = new Array(coulCount)
    .fill('')
    .map(watstore(createCol)(getwitch(store.colsState)))
    .join('');
  const tocells = val => new Array(coulCount)
    .fill(val)
    .map((col,index)=> toCell(col,index,getwitch(store.colsState)(index),store.dataState,store.dataTollbar))
    .join('');
  
  //console.log(cols)
  let rowto = rowes(row)
  rowto(createRow(null,cols))
  
  for (let i = 0; i < rowCount; i++){
    rowto(createRow(i + 1,tocells(i,),getwitch(store.rowsState)(i+1)  ))
  }
  
  return row.join('')
}