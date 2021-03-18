export class Emitter{
  constructor(){
    this.lisners = {}
  }
  // fomula.emit('table:select, {a:1})
  emit(event,...arg){
    this.lisners[event].forEach(lisn => {
      lisn(...arg)
    })
  }
  // fomula.sub('table:select, data => data)
  subcrube(event,fn){
    this.lisners[event] = this.lisners[event] || []
    this.lisners[event].push(fn)
    //console.log(this.lisners)
    return () =>{
      this.lisners[event] = this.lisners[event].filter(fil => fil !== fn)
    }
  }
}
