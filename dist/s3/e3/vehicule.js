"use strict";
function isVehicule(obj) {
    if (obj.marque && obj.annee) {
        return true;
    }
    return false;
}
function afficherVehicule(obj) {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    }
    else {
        console.log('Objet invalide pour un véhicule.');
    }
}
console.log('--- s3 e3 ---');
afficherVehicule({ marque: 'Toyota', annee: 2015 });
afficherVehicule({ marque: 'Toyota' });
afficherVehicule({ annee: 2015 });
afficherVehicule({});
