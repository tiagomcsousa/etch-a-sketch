const gridContainer = document.getElementById("grid-main-container");

window.addEventListener("load", initialDefaultDimension);

function initialDefaultDimension() {
    setGridSize(16);
    makeGrid(16);
}

function setGridSize(x) {
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
}

function makeGrid(x) {
    for (let i = 0; i < x * x; i++) {
        const cell = document.createElement("div");
        cell.classList = "grid-item";
        gridContainer.appendChild(cell);
        cell.addEventListener('mouseover', function() {
            var myArray = ['#2E3C76', '#E5CCFF', '#e622c7', '#5F6EA9'];
            var rand = myArray[Math.floor(Math.random() * myArray.length)];
            this.style.backgroundColor = rand;
        });
    }
}


const dimBtn = document.getElementById("dim-btn");

dimBtn.addEventListener("click", function() {
    var x = promptasks();
    var gridItems = Array.from(gridContainer.childNodes);
    gridItems.forEach((element) => {
        gridContainer.removeChild(element);
    });
    setGridSize(x);
    makeGrid(x);
});

function promptasks() {
    var selection = 0;
    do {
        selection = parseInt(window.prompt("New dimensions \n (from 0 to 100)", ""), 10);
    } while (isNaN(selection) || selection > 100 || selection < 1);
    return selection;
}