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

// Change border color
container.addEventListener('mouseover', changeBorder);

function changeBorder() {
    divs.forEach(div => div.style.borderColor = 'rgb(26, 65, 86)');
}

// Change color
const divs = document.querySelectorAll('.div');
divs.forEach(div => { 
    div.addEventListener('mouseover', changeColor)
    div.addEventListener('mouseover', removeTransition)
});

function changeColor(e) {
    e.target.style.background = 'black';
    e.target.style.borderColor = 'white';
}

// Clear screen
container.addEventListener('click', clearScreen);

function clearScreen() {
    divs.forEach(div => {
        div.classList.add('div-click');
        div.style.background = 'none'
    });
}

function removeTransition() {
    divs.forEach(div => div.classList.remove('div-click'))
}