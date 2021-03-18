
export class TableSelect{
  static className = 'selected';
  constructor(){
    this.groop = []
    this.checselect()
  }
  sected($cells){
    this.groop.push($cells)
    $cells.classList.add(TableSelect.className)
  }
  sectedGroop($cells){
    this.groop.push($cells)
    this.groop.forEach(cell => cell.classList.add(TableSelect.className))
  }
  removeGroop(){
    this.groop.forEach(cell => cell.classList.remove(TableSelect.className))
    this.groop = []
  }
  checselect(){
    let check
    return (n) => {
      if(n === check){
        return
      }else{
        if(this.groop.length !== 0) this.removeGroop()
        this.sected(n)
        check = n
      }
    }
  }
  get current(){
    return this.groop.map(val =>{
      return val.firstElementChild
    })
    //console.log(this.groop)
  }
  gripSelect(event,$root){
    event.preventDefault()
    let gripMouseover = e => this.sectedGroop(e.target)
    //this.sected(event.target)
    $root.addEventListener('mouseover',gripMouseover)
    $root.onmouseup = () =>{
      $root.removeEventListener('mouseover',gripMouseover)
    }
    //console.log(this.$root)
  }
  inpute(fn,event){
    fn(event.parentNode)
    return event
  }
  addStyle(state){
    /*
    const getkeys = val => key => cell.lastElementChild.style[key] = val[key]
    const getvals = fn => val => Object.keys(val).forEach(fn(val))
    const fores = fn => arr => arr.forEach(fn)
    const arrs = fores(getvals(getkeys))
    arrs(Object.values(dataTollbar))
    */
    if(state.dataTollbar) {
      const dataTollbar = state.dataTollbar
      this.groop.forEach(cell => {
        Object.values(dataTollbar).forEach(val => {
          if(val){
            Object.keys(val).forEach(key => {
              cell.lastElementChild.style[key] = val[key]
            })
          }
        })
      })
    }
    
  }
  
}
export function shoulSelect(event) {
  if(event.target.dataset.colselect){
    return true;
  }
}