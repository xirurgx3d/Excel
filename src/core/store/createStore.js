export function createStrore(rootReducer,initState = {}) {
  let state = rootReducer({...initState},{type:'__INIT__'})
  let listers = []
  return {
    subscribe(fn){
      // просто записываем фн
      listers.push(fn)
      return {
        unsub(){
          listers.filter(l => l !== fn)
        }
      }
    },
    //отправка
    dispatch(actions){
      // тут мы вызываем нашу фн и перезаписываем стейт
      // мутируя его постоянно
      //console.log('1',state)
      state = rootReducer(state,actions)
      //console.log('2',state)
      listers.forEach(lisner => lisner(state))
    },
    getState(){
      return JSON.parse(JSON.stringify(state))
    }
  }
}