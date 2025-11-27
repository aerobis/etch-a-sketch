let rows = 16;
let columns = 16;

let gridButton = document.querySelector("#grid-button");

for(let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
        let gridContainer = document.querySelector("#grid-container");
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", ()=>{
            gridItem.style.backgroundColor = 'black';
        })
    }
}

function generateNewGrid(){
    let userInput = parseInt(prompt("Enter new number of grids(2-100): "));

    gridContainer.innerHTML = '';
    
    root.style.setPropert('--boxes-per-row', userInput);
}

gridButton.addEventListener('click', generateNewGrid());

