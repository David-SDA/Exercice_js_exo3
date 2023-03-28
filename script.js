/* Les constantes */
const contenu = document.querySelector(".contenu"); // le plan de jeu
const texteTour = document.querySelector(".tourJoueur"); // le caractère qui détermine le tour du joueur

/* Les variables */
let joueurActuel = "✗" /* ou ◯ */; // le joueur qui doit jouer
let nombreTotalTour = 0; // le nombre de tour écoulés
let etatJeu = ["", "", "", "", "", "", "", "", ""]; // tableau pour suivre l'évolution du jeu

/* Création d'une case de base */
const caseDeJeu = document.createElement("div");
caseDeJeu.classList.add("case");

/* Fonction qui vérifie tout les cas possible de victoire */
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

/* Création des cases avec leurs fonctionnalités */
for(i = 0; i < 9; i++){
    let nouvCase = caseDeJeu.cloneNode(); // clone d'une case
    nouvCase.id = i; // ajout d'un id, utile pour la corrélation avec le tableau
    contenu.appendChild(nouvCase); // création de la case
    nouvCase.addEventListener("click", function(){ //ajout de fonctionnalité lors du click d'un case
        if(joueurActuel === "✗"){ // le joueur est ✗
            if(!nouvCase.hasChildNodes()){ // si dans la case, il n'y a rien d'écrit
                let croix = document.createElement("span"); // on crée un span
                nouvCase.appendChild(croix);
                croix.classList.add("croix"); // on ajoute son style
                croix.innerHTML = "✗"; // ainsi que son texte
                nouvCase.style.cursor = "not-allowed"; // on indique au joueur que la case est injouable
                joueurActuel = "◯"; // changement de joueur
                texteTour.innerHTML = "◯"; // qu'on affiche
                nombreTotalTour++; // on increment le nombre de tours
                var id = nouvCase.getAttribute("id"); // on recupère l'id (qui est un chiffre)
                etatJeu[id] = "✗"; // corrélation entre l'état du plan de jeu et son tableau 
                if(verifierGagnant()){ // on vérifie si il y a un gagnant
                    setTimeout(function(){
                        alert("Le joueur ✗ a gagné !"); // on dit qu'il a gagné
                    }, 100);
                    setTimeout(function(){
                        window.location.reload(); // puis on recharge la page pour recommencer un partie
                    }, 1000);
                }
                if(nombreTotalTour == 9){ // pas de gagnant -> on a complété toute les cases
                    setTimeout(function(){
                        alert("Partie terminée !"); // donc la partie est terminée
                    }, 100);
                    setTimeout(function(){
                        window.location.reload(); // on rechage la page pour recommencer une partie
                    }, 1000);
                }
            }
            
        }
        else{ // on fait la même chose que plus haut, sauf que le joueur est ◯
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
                    setTimeout(function(){
                        window.location.reload();
                    }, 1000);
                }
                if(nombreTotalTour == 9){
                    setTimeout(function(){
                        alert("Partie Terminée !");
                    }, 100);
                    setTimeout(function(){
                        window.location.reload();
                    }, 1000);
                }
            }
        }
    })
}