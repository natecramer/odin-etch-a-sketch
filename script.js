let theGrid = document.querySelector('#theGrid');

const W_IN_CELLS = 16;
const H_IN_CELLS = 16;
const NUM_CELLS = W_IN_CELLS * H_IN_CELLS;
let cells = [];

let rows = [];
let currentRow;
function newRow() {
    currentRow = document.createElement('div');
    currentRow.classList.add('row');
    theGrid.appendChild(currentRow);
}

// initialize
for (let i = 0; i < NUM_CELLS; i++) {
    if (i % 16 === 0) {
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