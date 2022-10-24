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