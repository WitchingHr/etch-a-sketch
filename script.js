// Make grid
const container = document.querySelector('.container');

function makeGrid(columns, rows) {
    container.style.setProperty('--grid-columns', columns);
    container.style.setProperty('--grid-rows', rows);
    for (let i = 0; i < (columns * rows); i++) {
        const div = document.createElement('div');
        container.appendChild(div).className = 'div glow';
    }
    addListener();
}
makeGrid(16,16);

// Slider - grid size
const slider = document.getElementById('myRange');
const output = document.getElementById('value')
output.innerHTML = `${slider.value} x ${slider.value}`;
slider.oninput = function() {
    output.innerHTML = `${slider.value} x ${slider.value}`;
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    makeGrid(this.value, this.value);
    const divs = document.querySelectorAll('.div');
    divs.forEach(div => div.style.borderRadius = `${slider2.value}%`);
    removeGlow();
}

// Slider - Div shaper
const slider2 = document.getElementById('shaper');
slider2.oninput = function() {
    const divs = document.querySelectorAll('.div');
    divs.forEach(div => div.style.borderRadius = `${this.value}%`);
}

// Remove glow
container.addEventListener('mouseover', removeGlow);

function removeGlow() {
    const glow = document.querySelectorAll('.glow');
    glow.forEach(glow => glow.classList.remove('glow'))
    
}

// Change color of div's on mouseover
function addListener() {
    const divs = document.querySelectorAll('.div');

    divs.forEach(div => { 
    div.addEventListener('mouseover', changeColor)
    div.addEventListener('mouseover', removeTransition)
});
}


function changeColor(e) {
    e.target.style.background = 'black';
    e.target.style.borderColor = 'black';
    // e.target.style.borderRadius = 0;
}

// Clear screen
container.addEventListener('click', clearScreen);

function clearScreen() {
    const divs = document.querySelectorAll('.div');

    divs.forEach(div => {
        div.classList.add('div-click');
        div.style.background = 'none'
        div.style.borderColor = 'rgb(15, 240, 146)'
    });
    playSound();
}

function removeTransition() {
    const divs = document.querySelectorAll('.div');
    divs.forEach(div => div.classList.remove('div-click'))
}

// Sound
function playSound() {
    const sound = document.querySelector('audio');
    sound.currentTime = 0;
    sound.play();
}