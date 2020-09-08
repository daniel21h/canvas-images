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
