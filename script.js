const contenu = document.querySelector(".contenu");

let joueurActuel = "✗"; // ou ◯

const caseDeJeu = document.createElement("div");
caseDeJeu.classList.add("case");

for(i = 0; i < 9; i++){
    let nouvCase = caseDeJeu.cloneNode();
    contenu.appendChild(nouvCase);
}