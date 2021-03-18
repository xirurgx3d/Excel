const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
class Dom{
  addClass(className){
  
  }
}
export function $() {
  return new Dom();
}

$.create = (tagName,className) => {
  const $elem = document.createElement(tagName)
  if(className){
    $elem.classList.add(className)
  }
  return $elem
}
$.getStyle = (target,arr) =>{ //localName: "input"
  return arr.reduce((acc,s)=>{
    let targ = target.firstElementChild ? target.firstElementChild : target
    acc[s] = targ.style[s]
    //acc[s] = target.style[s]
    return acc
  },{})
}