"use strict";
function afficherInfoProfessionnelle(personnePro) {
    if ('poste' in personnePro) {
        console.log(`Employé ${personnePro.nom} travaille comme ${personnePro.poste} .`);
    }
    else if ('entreprise' in personnePro) {
        console.log(`Client ${personnePro.nom} est associé à l'entreprise ${personnePro.entreprise} .`);
    }
}
const employe1 = {
    nom: "Amrou",
    poste: "Développeur"
};
const employe2 = {
    nom: "Amir",
    entreprise: "HagerGroup"
};
console.log('--- s1 e2 ---');
afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(employe2);
