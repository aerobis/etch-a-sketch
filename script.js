let rows = 16;
let columns = 16;
let root = document.documentElement;

let gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", ()=>{
            gridItem.style.backgroundColor = 'black';
        })
    }
}

let gridButton = document.querySelector("#grid-button");

function generateNewGrid(){
    let userInput = parseInt(prompt("Enter new number of grids(2-100): "));

    root.style.setProperty('--boxes-per-row', userInput);

    gridContainer.innerHTML = '';

    for(let i = 0; i < userInput; i++){
        for(let j = 0; j < userInput; j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            gridItem.addEventListener("mouseover", ()=>{
                gridItem.style.backgroundColor = "black";
            })

            gridContainer.appendChild(gridItem);
        }
    }
}

gridButton.addEventListener("click", generateNewGrid);

