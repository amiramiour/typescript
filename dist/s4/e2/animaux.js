"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace`);
    }
}
class Chien extends Animal {
    constructor(nom) {
        super(nom);
    }
    seDeplacer() {
        console.log(`Le chien ${this.nom} court`);
    }
}
class Chat extends Animal {
    constructor(nom) {
        super(nom);
    }
    seDeplacer() {
        console.log(`Le chat ${this.nom} saute`);
    }
}
console.log('--- s4 e2 ---');
const chien = new Chien('ROX');
chien.seDeplacer();
const chat = new Chat('Hind');
chat.seDeplacer();
function faireSeDeplacer(animaux) {
    animaux.forEach(animal => animal.seDeplacer());
}
console.log('--- s4 e2 --- faire se deplacer');
faireSeDeplacer([chien, chat]);
