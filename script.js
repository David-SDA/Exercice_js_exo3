const contenu = document.querySelector(".contenu");
const texteTour = document.querySelector(".tourJoueur");

let joueurActuel = "✗"; // ou ◯

const caseDeJeu = document.createElement("div");
caseDeJeu.classList.add("case");

for(i = 0; i < 9; i++){
    let nouvCase = caseDeJeu.cloneNode();
    contenu.appendChild(nouvCase);
    nouvCase.addEventListener("click", function(){
        if(joueurActuel === "✗"){
            if(!nouvCase.hasChildNodes()){
                let croix = document.createElement("span");
                nouvCase.appendChild(croix);
                croix.classList.add("croix");
                croix.innerHTML = "✗";
                nouvCase.style.cursor = "not-allowed";
                joueurActuel = "◯";
                texteTour.innerHTML = "◯";
            }
            
        }
        else{
            if(!nouvCase.hasChildNodes()){
                let rond = document.createElement("span");
                nouvCase.appendChild(rond);
                rond.classList.add("rond");
                rond.innerHTML = "◯";
                nouvCase.style.cursor = "not-allowed";
                joueurActuel = "✗";
                texteTour.innerHTML = "✗";
            }
        }
    })
}