interface Employe {
    nom : string ;
    poste : string ;
}
interface Client {
    nom : string ;
    entreprise : string ;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle (personnePro : PersonnePro){
    if('poste' in personnePro){
        console.log(`Employé ${personnePro.nom} travaille comme ${personnePro.poste} .`);
    }else if('entreprise' in personnePro){
        console.log(`Client ${personnePro.nom} est associé à l'entreprise ${personnePro.entreprise} .`);
    }
}

const employe1 : Employe = {
    nom : "Amrou",
    poste : "Développeur"
}
const employe2 : Client = {
    nom : "Amir",
    entreprise : "HagerGroup"
}

console.log('--- s1 e2 ---');

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(employe2);