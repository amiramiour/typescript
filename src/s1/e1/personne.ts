// src/s1/e1/personne.ts
interface Personne {
    nom: string;
    age: number;
}

function afficherPersonne(personne: Personne) {
    console.log(`Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`);
}

const personne1: Personne = {
    nom: "Alice",
    age: 25
};

console.log('--- s1 e1 ---');

afficherPersonne(personne1);
