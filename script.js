
const content = document.querySelector('.content');
const canvas = document.querySelector('.canvas');
const cellSlider = document.querySelector('.numCellsSlider');
const numCellsOutput = document.querySelector('#numCellsOutput');
numCellsOutput.innerHTML = cellSlider.value;
cellSlider.oninput = function() {numCellsOutput.innerHTML = this.value};
createCanvas();
const createBtn = document.querySelector('.createBtn');
createBtn.addEventListener('click', () => {
    if (canvas.lastChild) {clearCanvas(canvas);}
    createCanvas();
});

function createCanvas() {
    for(let i = 0; i < 16; i++) {
            const newDiv = document.createElement('div');

            newDiv.className = 'rowDiv';
            canvas.appendChild(newDiv);

        for(let j = 0; j < 16; j++) {
                //const newSketchCell = canvas.appendChild(document.createElement('div'));
                const newSketchCell = document.createElement('div');
                newSketchCell.className = 'sketchCell';
                newSketchCell.addEventListener('mouseover', () => (switchDivClass(newSketchCell)));
                newDiv.appendChild(newSketchCell);
        }
    }
}

function switchDivClass(cell) {
    cell.className = 'coloredCell';
}

function clearCanvas(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    };
}