"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const maVoiture = {
    marque: 'Peugeot',
    modele: '208',
    annee: 2019
};
console.log('--- s2 e3 ---');
const marque = getProperty(maVoiture, 'marque');
console.log(marque);
const annee = getProperty(maVoiture, 'annee');
console.log(annee);
/*const year = getProperty(maVoiture,'year'); // ts ne le permet pas
console.log(year);*/
