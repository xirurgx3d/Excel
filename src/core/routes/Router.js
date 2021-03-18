import {ActiveRouter} from "@core/routes/ActiveRouter";

export class Router{
  constructor(selector,router){
    if(!selector){
      throw new Error('no selector')
    }
    this.$paholder = document.querySelector(selector)
    this.router = router
    this.pages = null
    this.init()
    
  }
  
  init(){
    this.changePageHander = this.changePageHander.bind(this)
    window.addEventListener('hashchange',this.changePageHander,false)
    this.changePageHander()
  }
  changePageHander(){
    this.$paholder.innerHTML = ''
    if(this.pages){
      this.pages.destroy()
    }
    
    const Page = ActiveRouter.path.includes('exel') ? this.router.exel : this.router.dahbords
    //const Page = this.router.exel
    this.pages = new Page(ActiveRouter.params)
    
    //
    if(typeof this.pages.getRoot() === 'string'){
      this.$paholder.insertAdjacentHTML('afterbegin',this.pages.getRoot())
    }else{
      this.$paholder.append(this.pages.getRoot())
    }
    this.pages.afterRender()
    
    //console.log(ActiveRouter.path)
    //console.log('param',ActiveRouter.params)
  }
  get page(){
    console.log(this.pages)
  }
  destroy(){
    window.removeEventListener('hashchange',this.changePageHander)
  }
}