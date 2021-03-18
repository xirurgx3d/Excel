import * as type from './type.js'

export function rootReducer(state,action) {
  let fild
  let prevState
  //console.log(state)
  //console.log(action)
  
  switch (action.type) {
    case type.TAB_RESIZE:
      fild = action.data.type === 'col' ? 'colsState' : 'rowsState'
      //prevState = state[fild] || {}
      //prevState[action.data.id] = action.data.value
      return {...state,[fild]:values(state,fild,action)}
    break;
    case type.CHANGE_TEXT:
      fild = 'dataState'
      //prevState = state['dataState'] || {}
      //prevState[action.data.id] = action.data.value
      return {...state,
        currentText:action.data.value,
        dataState:values(state,fild,action)
      }
    break;
    case type.CHANGE_TOLLBAR:
      fild = 'dataTollbar'
      //prevState = state['dataTollbar'] || {}
      //let cell = Object.keys(state['dataState'])[0]
      //prevState = {...action.state}
      return {...state,dataTollbar:values(state,fild,action)}
    break;
    case type.CHANGE_DATA:
      return {...state,openData:new Date().toJSON()}
    break;
      
    default: return state
  }
}

function values(state,fild,action) {
  const val = state[fild]|| {}
  val[action.data.id] = ( typeof action.data.value === 'object') ?
    {...action.data.value} :
    action.data.value
  return val
}