import * as type from './type.js'

export function tableResize(data) {
  return {type:type.TAB_RESIZE,data}
}
export function changeText(text) {
  return {type:type.CHANGE_TEXT,data:text}
}
export function changeData() {
  return {type:type.CHANGE_DATA,data:{}}
}
export function changeTollBar(state) {
  return {type:type.CHANGE_TOLLBAR,data:state}
}