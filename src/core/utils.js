/*
export function capitalaze(string) {
  if(typeof string !== 'string') return ''
  return string[0].toLowerCase()
}
*/
class Util{
  capitalaze(string) {
    if(typeof string !== 'string') return ''
    return string[0].toUpperCase() + string.slice(1)
  }
  debouns(fn,timer){
    let time = undefined;
    return function (e) {
      if(typeof time === 'number'){
        clearInterval(time)
      }
      time = setTimeout(()=>{
        fn(e);
        time = undefined;
      },timer)
    }
  }
  storege(key,data = null){
    if(!data){
      return JSON.parse(localStorage.getItem(key))
    }
    return localStorage.setItem(key,JSON.stringify(data))
  }
  isEcval(a,b){
    if(typeof a === 'object' && typeof b === 'object'){
      return JSON.stringify(a) === JSON.stringify(b)
    }
    return a === b
  }
  camelCase(camel){
    return camel.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
  }
}
export let utils = new Util()
//export {utils}