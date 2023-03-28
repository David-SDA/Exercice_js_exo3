const contenu = document.querySelector(".contenu");
const texteTour = document.querySelector(".tourJoueur");

let joueurActuel = "✗"; // ou ◯
let nombreTotalTour = 0;
let etatJeu = ["", "", "", "", "", "", "", "", ""];

const caseDeJeu = document.createElement("div");
caseDeJeu.classList.add("case");

function verifierGagnant(){
    if((etatJeu[0] == etatJeu[1] && etatJeu[1] == etatJeu[2] && (etatJeu[0] !== "") && (etatJeu[1] !== "") && (etatJeu[2] !== "")) ||
    (etatJeu[3] == etatJeu[4] && etatJeu[4] == etatJeu[5] && (etatJeu[3] !== "") && (etatJeu[4] !== "") && (etatJeu[5] !== "")) ||
    (etatJeu[6] == etatJeu[7] && etatJeu[7] == etatJeu[8] && (etatJeu[6] !== "") && (etatJeu[7] !== "") && (etatJeu[8] !== "")) ||
    (etatJeu[0] == etatJeu[3] && etatJeu[3] == etatJeu[6] && (etatJeu[0] !== "") && (etatJeu[3] !== "") && (etatJeu[6] !== "")) ||
    (etatJeu[1] == etatJeu[4] && etatJeu[4] == etatJeu[7] && (etatJeu[1] !== "") && (etatJeu[4] !== "") && (etatJeu[7] !== "")) ||
    (etatJeu[2] == etatJeu[5] && etatJeu[5] == etatJeu[8] && (etatJeu[2] !== "") && (etatJeu[5] !== "") && (etatJeu[8] !== "")) ||
    (etatJeu[0] == etatJeu[4] && etatJeu[4] == etatJeu[8] && (etatJeu[0] !== "") && (etatJeu[4] !== "") && (etatJeu[8] !== "")) ||
    (etatJeu[2] == etatJeu[4] && etatJeu[4] == etatJeu[6] && (etatJeu[2] !== "") && (etatJeu[4] !== "") && (etatJeu[6] !== ""))){
        return true;
    }
    else{
        return false;
    }
}

for(i = 0; i < 9; i++){
    let nouvCase = caseDeJeu.cloneNode();
    nouvCase.id = i;
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
                nombreTotalTour++;
                var id = nouvCase.getAttribute("id");
                etatJeu[id] = "✗";
                if(verifierGagnant()){
                    setTimeout(function(){
                        alert("Le joueur ✗ a gagné !");
                    }, 100);
                    
                }
                if(nombreTotalTour == 9){
                    setTimeout(function(){
                        alert("Partie terminée !");
                    }, 100);
                }
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
                nombreTotalTour++;
                var id = nouvCase.getAttribute("id");
                etatJeu[id] = "◯";
                if(verifierGagnant()){
                    setTimeout(function(){
                        alert("Le joueur ◯ a gagné !");
                    }, 100);
                }
                if(nombreTotalTour == 9){
                    setTimeout(function(){
                        alert("Partie Terminée !");
                    }, 100);
                }
            }
        }
    })
}