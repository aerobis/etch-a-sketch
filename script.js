let rows = 16;
let columns = 16;
let root = document.documentElement;
let isMouseDown = false;

let gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridContainer.addEventListener("mousedown", ()=>{
            isMouseDown = true;

            gridItem.addEventListener("mouseover", ()=>{
                if(isMouseDown){
                    gridItem.style.backgroundColor = 'black';
                }    
            })

            gridItem.addEventListener("mousedown", ()=>{
                gridItem.style.backgroundColor = 'black';  
            })

            gridItem.addEventListener("click", ()=>{
                gridItem.style.backgroundColor = 'black';  
            })

            }); 

        gridContainer.addEventListener("mouseup", ()=>{
            isMouseDown = false;
        });
    }
}

let gridButton = document.querySelector("#grid-button");

function generateNewGrid(){
    let userInput = parseInt(prompt("Enter new number of grids(2-100): "));

    if(userInput < 2 || userInput > 100){
        alert("Please enter a valid number!");
        return;
    }

    root.style.setProperty('--boxes-per-row', userInput);

    gridContainer.innerHTML = '';

    for(let i = 0; i < userInput; i++){
        for(let j = 0; j < userInput; j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            gridContainer.addEventListener("mousedown", ()=>{
                isMouseDown = true;

                gridItem.addEventListener("mouseover", ()=>{
                    if(isMouseDown){
                        gridItem.style.backgroundColor = 'black';
                    }    
                })

                gridItem.addEventListener("mousedown", ()=>{
                        gridItem.style.backgroundColor = 'black';  
                })

                gridItem.addEventListener("click", ()=>{
                        gridItem.style.backgroundColor = 'black';  
                })

            }); 

            gridContainer.addEventListener("mouseup", ()=>{
                isMouseDown = false;
            })

            gridContainer.appendChild(gridItem);
        }
    }
}

gridButton.addEventListener("click", generateNewGrid);

