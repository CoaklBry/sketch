
const content = document.querySelector('.content');
const canvas = document.querySelector('.canvas');
const canvasWidth = canvas.clientWidth + 2;
const canvasHeight = canvas.clientHeight + 2;
const cellSlider = document.querySelector('.numCellsSlider');
const numCellsOutput = document.querySelector('#numCellsOutput');
numCellsOutput.innerHTML = cellSlider.value;
cellSlider.oninput = function() {numCellsOutput.innerHTML = this.value};
createCanvas(16);
const createBtn = document.querySelector('.createBtn');
createBtn.addEventListener('click', () => {
    if (canvas.lastChild) {clearCanvas(canvas);}
    createCanvas(cellSlider.value);
});

function createCanvas(numCells) {
    for(let i = 0; i < numCells; i++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'rowDiv';
            canvas.appendChild(newDiv);

        for(let j = 0; j < numCells; j++) {
                const newSketchCell = document.createElement('div');
                newSketchCell.className = 'sketchCell';
                newSketchCell.addEventListener('mouseover', (e) => {
                    (switchDivClass(newSketchCell))
                });
                newDiv.appendChild(newSketchCell);
        }
    }
}

function switchDivClass(cell) {
    cell.classList.add('coloredCell');
}

function clearCanvas(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    };
}