let theGrid = document.querySelector('#theGrid');

let W_IN_CELLS = 16;
let H_IN_CELLS = 16;
let NUM_CELLS = W_IN_CELLS * H_IN_CELLS;
let cells = [];

let rows = [];
let currentRow;
function newRow() {
    currentRow = document.createElement('div');
    currentRow.classList.add('row');
    theGrid.appendChild(currentRow);
}



// initialize


function generateGrid(size) {
    W_IN_CELLS = size;
    H_IN_CELLS = size;
    NUM_CELLS = W_IN_CELLS * H_IN_CELLS;
    for (let i = 0; i < NUM_CELLS; i++) {
        if (i % W_IN_CELLS === 0) {
            newRow();
        }
        let col = i % W_IN_CELLS;
        let row = i / W_IN_CELLS;
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = 'cell';
        cell.addEventListener('mouseover', () => cell.classList.add('cellHover'));
        currentRow.appendChild(cell);
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
        alert('No, lower than 100.')
    } else {
        clearGrid();
        generateGrid(size);
    }
});

generateGrid(16);