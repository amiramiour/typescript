interface IAnimal {
    nom : string;
     seDeplacer() : void;
}
class Animal implements IAnimal {
    constructor(public nom : string) {}
    seDeplacer() {
        console.log(`L'animal ${this.nom } se déplace`);
    }
}

console.log('--- s4 e1 ---');
const animal = new Animal('chien');
animal.seDeplacer();