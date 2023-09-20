function toggleMode() {
  // função que verifica se determinaa classe está lá
  // se estiver, remove
  // se não estiver, adiciona
  const html = document.documentElement
  html.classList.toggle("light")

  // troca a imagem do avatar
  const img = document.querySelector("#profile img")
  // de acordo com o tema da página
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto-perfil-light.png")
    img.setAttribute(
      "alt",
      "Foto de Davi José sorrindo, usando óculos escuros com um milkshake na mão"
    )
  } else {
    img.setAttribute("src", "./assets/foto-perfil.jpg")
    img.setAttribute(
      "alt",
      "foto de Davi José sorrindo, usando óculos e camisa cinza escuro olhando para cima"
    )
  }
}
