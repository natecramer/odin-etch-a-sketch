function clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
}

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
        cell.addEventListener('mouseover', fillCell);
        cell.style['background-color'] = 'darkslategray'

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

// select draw style
let drawStyleSelect = document.querySelector('#drawStyle');
let drawStyle = 'yellow';
function setDrawStyle() {
    drawStyle = drawStyleSelect.value;
}

function fillCell() {
    switch (drawStyle) {
        case 'yellow':
            this.style['background-color'] = 'yellow';
            break;
        case 'random':
            this.style['background-color'] = `rgb(
                ${Math.random() * 255},
                ${Math.random() * 255},
                ${Math.random() * 255}
            )`;
            break;
        case 'fade':
            bgColor = '';
            bgColor = window.getComputedStyle(this, null).getPropertyValue('background-color');
            
            // extract rgb from bgColor
            const re = /.*?\(([0-9]*?), ([0-9]*?), ([0-9]*?)\)/;
            rgba = bgColor.match(re);

            if (!rgba)
                return;

            r = rgba[1];
            g = rgba[2];
            b = rgba[3];

            // fade to black
            r = clamp(r - 25.5, 0, 255);
            g = clamp(g - 25.5, 0, 255);
            b = clamp(b - 25.5, 0, 255);

            this.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
            
            break;
    }
}

generateGrid(16);