export class ActiveRouter{
  static get path(){
    return window.location.hash.slice(1)
  }
  static get params(){
    return ActiveRouter.path.split('/')[1]
  }
}