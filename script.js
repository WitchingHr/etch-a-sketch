const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('div');
    container.appendChild(makeDiv);
}