"use strict";
function afficherPersonne(personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}
function afficherPersonneAvancee(personne) {
    if (personne.adresse) {
        console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue} , ${personne.adresse.ville}.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans. `);
    }
}
const personne1 = {
    nom: "Alice",
    age: 25,
    id: 1,
};
const personne2 = {
    nom: "Amir",
    age: 22,
    id: 1,
    adresse: {
        rue: "Rue Désiré Préaux",
        ville: "Montreuil"
    }
};
console.log('--- s1 e2 ---');
afficherPersonneAvancee(personne1);
afficherPersonneAvancee(personne2);
