interface Employe {
    nom: string;
    poste: string;
}
interface Client {
    nom: string;
    entreprise: string;
}
type PersonnePro = Employe | Client;
declare function afficherInfoProfessionnelle(personnePro: PersonnePro): void;
declare const employe1: Employe;
declare const employe2: Client;
