// Make grid
const container = document.querySelector('.container');

function makeGrid(columns, rows) {
    container.style.setProperty('--grid-columns', columns);
    container.style.setProperty('--grid-rows', rows);
    for (let i = 0; i < (columns * rows); i++) {
        const makeDiv = document.createElement('div');
        container.appendChild(makeDiv).className = 'div';
    }
}

makeGrid(16,16);

// Event listener
const divs = document.querySelectorAll('.div');
divs.forEach(div => div.addEventListener('mouseover', changeColor));

function changeColor(e) {
    e.target.style.background = 'black';
}