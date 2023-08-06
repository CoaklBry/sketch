
const canvas = document.querySelector('.canvas');
createCanvas();

class sketchCell {

}

function createCanvas() {
    for(let i = 0; i < 16; i++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'rowDiv';
            canvas.appendChild(newDiv);

        for(let i = 0; i < 16; i++) {
                const newSketchCell = canvas.appendChild(document.createElement('div'));
                newSketchCell.className = 'sketchCell';
                newSketchCell.addEventListener('click', () => {
                    newSketchCell.setAttribute('style', 'background-color: black;');
                });
                newDiv.appendChild(newSketchCell);
        }
    }
}