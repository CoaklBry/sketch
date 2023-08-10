
const canvas = document.querySelector('.canvas');
const numRows = 
createCanvas();
const createBtn = document.querySelector('.createBtn');
createBtn.addEventListener('click', () => {
    if (canvas.lastChild) {clearCanvas(canvas);}
    createCanvas(canvas);
})

function createCanvas() {
    for(let i = 0; i < 16; i++) {
            const newDiv = document.createElement('div');

            newDiv.className = 'rowDiv';
            canvas.appendChild(newDiv);

        for(let i = 0; i < 16; i++) {
                const newSketchCell = canvas.appendChild(document.createElement('div'));
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
        parent.removeChildren(parent.lastChild);
    };

    createCanvas();
}