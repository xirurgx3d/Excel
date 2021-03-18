import './scss/index.scss'

import {Router} from "@core/routes/Router";
import {Dahbords} from "./pages/Dahbords";
import {Exelpage} from "./pages/Exelpage";



new Router('#app',{
  dahbords:Dahbords,
  exel:Exelpage
})




