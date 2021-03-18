import {utils} from '@core/utils.js'
export function dragdrope(event) {
  event.preventDefault();
  const target = event.target;
  const bound = target.getBoundingClientRect()
  
  let shiftX = event.clientX - target.getBoundingClientRect().left;
  let shiftY = event.clientY - target.getBoundingClientRect().top;
  
  const lisner = debone => {
    document.addEventListener('mousemove', debone);
    document.onmouseup = () => {
      document.removeEventListener('mousemove', debone)
    }
  }
  function moveAt(pageX, pageY) {
    target.style.left = pageX - shiftX + 'px';
    target.style.top = pageY - shiftY + 'px';
  }
  
  let DagMove = e =>{
    const delta = e.pageX - bound.right
    target.style.zIndex = '5'
    target.style.boxShadow = "0 0 5px #999999";
    
    console.log(shiftX)
    console.log(e.pageX)
    //moveAt(delta, e.pageY);
    //target.style.transform = `translate(${(bound.width + delta)}px,0)` //(bound.width + delta) + 'px'
    
    //let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
    
  }
  
  lisner(utils.debouns(DagMove,1))
}
export function shoulDragdrope(event) {
  if(event.target.dataset.rows === 'dpag'){
    return true;
  }
}