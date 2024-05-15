const pointsHtml = document.querySelector('.points')
const gameBox = document.querySelector('.game')

let points = 0
pointsHtml.innerHTML = 'Points: ' + points


for (let i = 0; i < 16; i++) {
    gameBox.innerHTML += `
        <div class="cell" id="${i}"></div>
        `
}
const cells = gameBox.querySelectorAll('.cell')

let cellPosition;
function getRandomCell(cells) {
    cells.forEach(cell => cell.classList.remove('color'));
    let randomCell = cells[Math.floor(Math.random() * cells.length)];
    randomCell.classList.add('color');
    cellPosition = randomCell.id

}

function moveColor() {
    let timer = null;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        getRandomCell(cells);
    }, 1000);
}
moveColor()

cells.forEach(cell => {
    cell.onclick = () => {
        if (cell.id === cellPosition) {
            points++
            pointsHtml.innerHTML = 'Points: ' + points
        }
    }
})