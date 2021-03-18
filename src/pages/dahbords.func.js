import {utils} from "../core/utils";

function toHtml(keys, index) {
  
  const [,key] = keys.split(':')
  const dates = utils.storege('exel:'+key).openedData
  return `
    <li class="db__record">
          <a href="#exel/${key}">Таблица номер ${index+1}</a>
          <strong>${dates}</strong>
        </li>`
}

function getAllkey() {
  const keys = []
  for(let i = 0;i < localStorage.length; i++){
    const key = localStorage.key(i)
    if(!key.includes('exel')){
      continue
    }
    keys.push(key)
  }
  
  return keys
}

export function VievDashbord() {
  const keys = getAllkey();
  if(!keys) return '<p>Вы не создали таблицу</p>'
  return `
  <div class="db__list-header">
        <span>Название</span>
        <span>Дата открытия</span>
      </div>

      <ul class="db__list">
        ${keys.map(toHtml).join('')}

      </ul>
  
  `
}