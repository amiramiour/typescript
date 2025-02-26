"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace`);
    }
}
console.log('--- s4 e1 ---');
const animal = new Animal('chien');
animal.seDeplacer();
