const pointsHtml = document.querySelector('.points')
const gameBox = document.querySelector('.game')

let points = 0
let cellPosition;

function updatePointsHtml(points) {
    pointsHtml.innerHTML = 'Points: ' + points
}
updatePointsHtml(points)



for (let i = 0; i < 16; i++) {
    gameBox.innerHTML += `
        <div class="cell" id="${i}"></div>
        `
}

const cells = gameBox.querySelectorAll('.cell')

function getRandomCell(cells) {
    cells.forEach(cell => cell.classList.remove('color'));
    let randomCell = cells[Math.floor(Math.random() * cells.length)];
    randomCell.classList.add('color');
    cellPosition = randomCell.id
}

function moveColor() {
    setInterval(() => {
        getRandomCell(cells);
    }, 1000);
}
moveColor()

cells.forEach(cell => {
    cell.onclick = () => {
        if (cell.id === cellPosition) {
            points++
            updatePointsHtml(points)
        }
    }
})