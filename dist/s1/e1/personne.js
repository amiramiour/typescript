"use strict";
function afficherPersonne(personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}
const personne1 = {
    nom: "Alice",
    age: 25
};
console.log('--- s1 e1 ---');
afficherPersonne(personne1);
