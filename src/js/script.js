// Tableau des réponses possibles
const reponses = [
    "Oui.",
    "Non.",
    "Peut-être.",
    "Pas encore.",
    "Le moment viendra.",
    "Attends un signe.",
    "La réponse est proche.",
    "Fais confiance au temps.",
    "Suis ton intuition.",
    "Ce n’est pas le bon moment.",
    "Tout s’éclairera bientôt.",
    "Il est trop tôt pour le savoir.",
    "L’univers te dira quand.",
    "Ce que tu cherches t’attend déjà.",
    "Avance sans crainte.",
    "Écoute ton instinct.",
    "La voie est libre.",
    "Ce n’est pas écrit.",
    "Ce n’est pas la bonne direction.",
    "Le doute est la première réponse.",
    "Réfléchis encore un peu.",
    "Ce que tu redoutes n’arrivera pas.",
    "Oui, mais pas comme tu l’imagines.",
    "Une surprise t’attend.",
    "Fais un pas, puis observe.",
    "La réponse est en toi.",
    "Rien n’est jamais certain.",
    "Laisse les choses se faire.",
    "N’insiste pas.",
    "Le silence est aussi une réponse."
]; 

function getMagicAnswer() {
    // Récupère la question (optionnel)
    const question = document.querySelector("#question").value;
    // Génère un nombre aléatoire
    const magic = Math.floor(Math.random() * reponses.length); // 0 à longueur du tableau -1
    console.log(magic);
    return reponses[magic]
}

// Sélection des éléments du DOM
const button = document.querySelector(".button");
const img = document.querySelector(".img-cat");
const questionInput = document.querySelector("#question");
// Créer un élément et y attribuer une classe
const result = document.createElement('p');
result.className = "result";
// Créer un élément pour l'image, modifier son chemin, ajouter son texte alternatif & une classe CSS
const catThinking = document.createElement('img');
catThinking.src = "./dist/thinking-cat.gif";
catThinking.alt = "Chat qui réfléchit";
catThinking.className = "thinking-cat";

//Sélectionner un élément et le supprimer
const refresh = document.querySelector(".refresh");
refresh.remove();

button.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre
    // Vérifie si le champ est vide (après avoir enlevé les espaces)
    if (questionInput.value.trim() === '') {
        alert("Oh, oh ! Le champ est vide !");
        return; // Arrête l'exécution de la fonction ici si le champ est vide
    }

    // Si le champ n'est pas vide
    img.src = catThinking.src;
    result.remove();
    refresh.remove();
    setTimeout(() => {
        img.src = "./dist/cat-gif.gif";
        const answer = getMagicAnswer();
        console.log(answer);
        result.textContent = "La réponse est... " + answer.toLowerCase();
        document.body.appendChild(result);
        document.body.appendChild(refresh);
    }, 3500);
    });

    //Ajouter une fonctionnalité "recommencer"
    refresh.addEventListener('click', function(event){
        questionInput.value="";
        result.remove();
        refresh.remove();
    })

