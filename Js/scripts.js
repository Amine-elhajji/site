const background = document.querySelector("body")
const ranButton = document.querySelector("#bgRandomColor")
const choButton = document.querySelector("#bgChosenColor")

const random = (number = 256) => {
    return Math.floor(Math.random() * number)
}

ranButton.addEventListener("click", () => {
    background.style.backgroundColor = `rgb(${random().toString()}, ${random().toString()}, ${random().toString()})`
})


choButton.addEventListener("click", () => {
    const response = prompt("Quelle couleur voulez-vous (code héxadécimal, exemple : #0000ff) ?")
    background.style.backgroundColor = response
})