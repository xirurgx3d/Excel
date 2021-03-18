function button(but) {
  return `
      <div class="button ${ but.active ? 'active' : ''}"
        data-type="button"
        data-value='${JSON.stringify(but.value)}'
      >
        <i class="material-icons"
        data-type="button"
        data-value='${JSON.stringify(but.value)}'
        >${but.icons}</i>
      </div>`
}

export function createTolbar(state){
  const buttons = [
    {
      icons:'format_align_left',
      active:state['textAlign'] === 'left',
      value:{
        textAlign:'left'
      }
    },
    {
      icons:'format_align_center',
      active:state['textAlign'] === 'center',
      value:{
        textAlign:'center'
      }
      
    },
    {
      icons:'format_align_right',
      active:state['textAlign'] === 'right',
      value:{
        textAlign:'right'
      }
    },
    {
      icons:'format_bold',
      active: state['fontWingh'] === 'bold',
      value:{
        fontWingh: state['fontWingh'] === 'bold' ? 'normal' : 'bold'
      }
    },
    {
      icons:'format_italic',
      active:state['fontStyle'] === 'italic',
      value:{
        fontStyle:state['fontStyle'] === 'italic' ? 'normal' : 'italic'
      }
    },
    {
      icons:'format_underlined',
      active:state['textDecoreit'] === 'underlined',
      value:{
        textDecoreit:state['textDecoreit'] === 'underlined' ? 'normal' : 'underlined'
      }
    },
  ]
  return buttons.map(button).join('')
}