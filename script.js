let theGrid = document.querySelector('#theGrid');

let w_in_cells = 16;
let h_in_cells = 16;
let num_cells = w_in_cells * h_in_cells;
let cells = [];

function generateGrid(size) {
    w_in_cells = size;
    h_in_cells = size;
    num_cells = w_in_cells * h_in_cells;

    // update cell size
    theGrid.style['grid-template-columns'] = `repeat(${w_in_cells}, 1fr)`;

    for (let i = 0; i < num_cells; i++) {
        let col = i % w_in_cells;
        let row = i / w_in_cells;
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => cell.classList.add('cellHover'));

        theGrid.appendChild(cell);
    }    
}

function clearGrid() {
    while (theGrid.firstChild) {
        theGrid.removeChild(theGrid.firstChild);
    }
}

// grid button
let gridButton = document.querySelector('#generateGridBtn');
gridButton.addEventListener('click', () => {
    const size = prompt('Enter grid size');
    if (size < 2) {
        alert('No, it needs to be larger than 2.')
    } else if (size >= 100) {
        alert('No, it needs lower than 100.')
    } else {
        clearGrid();
        generateGrid(size);
    }
});

generateGrid(16);