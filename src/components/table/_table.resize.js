import {utils} from '@core/utils.js'
export function resizeHandler(event) {
  return new Promise(resolve =>{
  const data = event.target.dataset.resize;
  // достаем родителя
  const target = event.target.closest('[data-clumn="resiz"]');
  // получем все колонки
  const cells = this.$root.querySelectorAll(`[contenteditable="${target.dataset.colsname}"]`)
  // узнаем позицию элемента
  const bound = target.getBoundingClientRect()
  // слушатель
  const lisner = debone => {
    document.addEventListener('mousemove', debone);
    document.onmouseup = () => {
      resolve({
        type:data,
        id:target.dataset.colsname,
        value: data === 'col' ? target.style.width : target.style.height
      })
      document.removeEventListener('mousemove', debone)
    }
  }
  /*
  const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
  const delta = b => e => e.pageX - b
  const deltasize = goriz => delta => (goriz + delta) + 'px'
  const move = target => deltasize => target.style.width = deltasize
  const cellses = goriz => move => cells.forEach(val => val.style[goriz] = move)
  //let onMouseMove = undefined
  */
  if(data === 'col'){
    /*
    let onMouseMove = compose(
      cellses('width'),
      move(target),
      deltasize(bound.width),
      delta(bound.right)
    )
    */
    
    const onMouseMove = e => {
      //console.log('re')
      const delta = e.pageX - bound.right
      target.style.width = (bound.width + delta) + 'px'
      cells.forEach(val =>{
        val.style.width = (bound.width + delta) + 'px'
      })
      
      /*
      this.$dispatch({type:'TAB_RESIZE',data:{
        id:target.dataset.colsname,
        value:bound.width + delta
      }})
      */
    };
    
    
    lisner(utils.debouns(onMouseMove,3))
  }
  if(data === 'row'){
    
    const onMouseMove = e => {
      const delta = e.pageY - bound.bottom
      target.style.height = (bound.height + delta) + 'px'
      cells.forEach(val =>{
        val.style.height = (bound.bottom + delta) + 'px'
      })
      
    };
    
    lisner(utils.debouns(onMouseMove,1))
  }
  //onMouseMove && lisner(utils.debouns(onMouseMove,1))
  })
}



export function shoulResize(event) {
  if(event.target.dataset.resize){
    return true;
  }
}