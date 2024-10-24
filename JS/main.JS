// lié a l'input avec id age
const age = document.getElementById('age');
//lié l'input avec id genre, on doit préciser que c'est un id avec le # car on utilise querySelector
const genre = document.querySelector('#genre');
//On recommande d'utilisé querySelector mais on peux utilise getElementById
// lie le bouton par son id à la variable qui est une contante
const bouton = document.getElementById("bouton");
//lie la div resultat par son id
const resultat = document.querySelector('#resultat');

// On ajoute un ecouteur d'evenement qui appelera la fonction verifier imposition
bouton.addEventListener("click", verifierImposition)

function verifierImposition() {
    resultat.innerHTML = (age.value > 20) && (genre.value == "h") || age.value > 18 && age.value < 35 && genre.value == "f" ? "Imposable" :"Non imposable";
    

    
}
    
