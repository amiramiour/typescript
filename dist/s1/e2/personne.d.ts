interface Personne {
    nom: string;
    age: number;
    readonly id: number;
    adresse?: Adresse;
}
interface Adresse {
    rue: string;
    ville: string;
}
declare function afficherPersonne(personne: Personne): void;
declare function afficherPersonneAvancee(personne: Personne): void;
declare const personne1: Personne;
declare const personne2: Personne;
