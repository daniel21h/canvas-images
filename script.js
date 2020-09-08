// Select & Preview image

document.getElementById('select-image')
  .onclick = () => {
    document.getElementById('photo-file').click()
  }

// Evento após terminar o carregamento da DOM
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('photo-file')
    .addEventListener('change', () => {
      // Pegar arquivo de foto
      let file = document.getElementById('photo-file')
        .files.item(0)

      // Ler um arquivo
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        let image = document.getElementById('photo-preview')
        image.src = event.target.result
      }
    })
})

// Selection Tool
let startX, startY, relativeStartX, relativeStartY,
  endX, endY, relativeEndX, relativeEndY

const selection = document.getElementById('selection-tool')

let startSelection = false

const events = {
  mouseover() {
    this.style.cursor = 'crosshair'
  },
  mousedown() {
    const { clientX, clientY, offsetX, offsetY } = event

    // console.table({
    //   'client': [clientX, clientY],
    //   'offset': [offsetX, offsetY]
    // })

    startX = clientX
    startY = clientY
    relativeStartX = offsetX
    relativeStartY = offsetY

    startSelection = true
  },
  mousemove() {
    endX = event.clientX
    endY = event.clientY

    if (startSelection) {
      selection.style.display = 'initial'
      selection.style.top = startY + 'px'
      selection.style.left = startX + 'px'

      selection.style.width = (endX - startX) + 'px'
      selection.style.height = (endY - startY) + 'px'
    }
  },
  mouseup() {
    startSelection = false

    relativeEndX = event.layerX
    relativeEndY = event.layerY
  }
}

Object.keys(events).forEach((eventName) => {
  let image = document.getElementById('photo-preview')
  image.addEventListener(eventName, events[eventName])
})
