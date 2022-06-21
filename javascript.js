const mainContainer = document.querySelector("#mainContainer");
const refreshButton = document.querySelector("button");

function createSquare(num = 16){
    for (divI = 1; divI <= num;divI++){
        for(divJ = 1; divJ<= num;divJ++){
            const div = document.createElement('div');
            let tempInt = (divI-1)*num + divJ;
            let tempStr = String(tempInt);
            div.setAttribute("id", tempStr);
            div.style.width = String(800/num)+"px";
            div.style.height = String(800/num)+"px";
            div.classList.add("box");
            mainContainer.appendChild(div);
        }
    }
}
function removeSquare(){
    while(mainContainer.hasChildNodes()){
        mainContainer.removeChild(mainContainer.firstChild);
    }
}
function fill(){
    const divs = document.querySelectorAll("div.box");
    divs.forEach((div) =>{
        div.addEventListener("mouseover", ()=>{
          div.style.background = "grey";
     })
    })
}
refreshButton.addEventListener("click", ()=>{
    let temp = prompt("How many squares per side do you want?");
    if (temp <= 100 && temp >0){
        removeSquare();
        createSquare(temp);
        fill();
    }
    else alert("Invalid, pal!");
})

createSquare();
fill();

/*
1. create 16x16 div using JS
- store it
2. put it inside container
3. show them as a grid
4. flexbox*/