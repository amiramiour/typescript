function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
  }
const maVoiture: Voiture = {
    marque: 'Peugeot',
    modele: '208',
    annee: 2019
};
console.log('--- s2 e3 ---');

const marque =getProperty(maVoiture,'marque');
console.log(marque);
const annee = getProperty(maVoiture,'annee');
console.log(annee);
/*const year = getProperty(maVoiture,'year'); // ts ne le permet pas
console.log(year);*/
