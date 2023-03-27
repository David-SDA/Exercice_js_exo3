const contenu = document.querySelector(".contenu");

let joueurActuel = "✗"; // ou ◯

const caseDeJeu = document.createElement("div");
caseDeJeu.classList.add("case");

for(i = 0; i < 9; i++){
    let nouvCase = caseDeJeu.cloneNode();
    contenu.appendChild(nouvCase);
    nouvCase.addEventListener("click", function(){
        if(joueurActuel === "✗"){
            let croix = document.createElement("span");
            nouvCase.appendChild(croix);
            croix.classList.add("croix");
            croix.innerHTML = "✗";
            joueurActuel = "◯";
        }
        else{
            let rond = document.createElement("span");
            nouvCase.appendChild(rond);
            rond.classList.add("rond");
            rond.innerHTML = "◯";
            joueurActuel = "✗";
        }
    })
}