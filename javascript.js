const mainContainer = document.querySelector("#mainContainer");

function createSquare(num = 16){
    for (divI = 1; divI <= num;divI++){
        for(divJ = 1; divJ<= num;divJ++){
            const div = document.createElement('div');
            let tempInt = (divI-1)*16 + divJ;
            let tempStr = String(tempInt);
            div.setAttribute("id", tempStr);
            div.classList.add("box");
            mainContainer.appendChild(div);
        }
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
createSquare();


/*
1. create 16x16 div using JS
- store it
2. put it inside container
3. show them as a grid
4. flexbox*/