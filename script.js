const pointsHtml = document.querySelector('.points')
const gameBox = document.querySelector('.game')

let points = 0
pointsHtml.innerHTML = 'Points: ' + points

for (let i = 0; i < 16; i++) {
    gameBox.innerHTML += `
    <div class="cell"></div>
    `
}